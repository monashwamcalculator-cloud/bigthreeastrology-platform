/**
 * astro-engine.ts — real low-precision astronomical calculations for
 * BIGThreeAstrology calculators.
 *
 * Methods: classical orbital-element algorithms (Paul Schlyter's
 * "How to compute planetary positions", simplified perturbation terms
 * for the Moon). Accuracies, adequate for sign / nakshatra placement
 * except within ~0.5° of a cusp:
 *   Sun longitude    ~0.01°
 *   Moon longitude   ~0.1–0.3°
 *   Saturn longitude ~1-2° (sign-level; ingress dates may shift by weeks)
 * Vedic (sidereal) positions subtract the Lahiri ayanamsa.
 *
 * All public functions take a JavaScript Date (interpreted as UTC)
 * and return ecliptic longitudes in degrees 0–360 unless stated.
 */

const RAD = Math.PI / 180;
const DEG = 180 / Math.PI;

function rev(x: number): number {
  return x - Math.floor(x / 360) * 360;
}

function revRad(x: number): number {
  return x - Math.floor(x / (2 * Math.PI)) * 2 * Math.PI;
}

/** Schlyter day number: days since 2000 Jan 0.0 (Dec 31, 1999, 0h UT). */
export function dayNumber(date: Date): number {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const ut =
    date.getUTCHours() +
    date.getUTCMinutes() / 60 +
    date.getUTCSeconds() / 3600;
  const a = Math.floor((14 - m) / 12);
  const y2 = y + 4800 - a;
  const m2 = m + 12 * a - 3;
  const jdn =
    day +
    Math.floor((153 * m2 + 2) / 5) +
    365 * y2 +
    Math.floor(y2 / 4) -
    Math.floor(y2 / 100) +
    Math.floor(y2 / 400) -
    32045;
  const jd = jdn + (ut - 12) / 24;
  return jd - 2451543.5;
}

interface OrbitalElements {
  N: number; // longitude of ascending node
  i: number; // inclination
  w: number; // argument of perihelion
  a: number; // semi-major axis
  e: number; // eccentricity
  M: number; // mean anomaly
}

function solveKeplerE(M: number, e: number): number {
  const MRad = revRad(M * RAD);
  let E = e < 0.8 ? MRad : Math.PI;
  for (let k = 0; k < 12; k++) {
    E = E - (E - e * Math.sin(E) - MRad) / (1 - e * Math.cos(E));
  }
  return E;
}

function eclipticLongitude(el: OrbitalElements): number {
  const E = solveKeplerE(el.M, el.e);
  const xv = el.a * (Math.cos(E) - el.e);
  const yv = el.a * (Math.sqrt(1 - el.e * el.e) * Math.sin(E));
  const v = Math.atan2(yv, xv) * DEG;
  const r = Math.sqrt(xv * xv + yv * yv);
  const xh = r * (Math.cos(el.N * RAD) * Math.cos((v + el.w) * RAD) -
    Math.sin(el.N * RAD) * Math.sin((v + el.w) * RAD) * Math.cos(el.i * RAD));
  const yh = r * (Math.sin(el.N * RAD) * Math.cos((v + el.w) * RAD) +
    Math.cos(el.N * RAD) * Math.sin((v + el.w) * RAD) * Math.cos(el.i * RAD));
  return rev(Math.atan2(yh, xh) * DEG);
}

function sunElements(d: number): OrbitalElements {
  return {
    N: 0,
    i: 0,
    w: 282.9404 + 4.70935e-5 * d,
    a: 1.0000002,
    e: 0.016709 - 1.151e-9 * d,
    M: 356.047 + 0.9856002585 * d,
  };
}


function heliocentricXYZ(el: OrbitalElements): [number, number, number] {
  const E = solveKeplerE(el.M, el.e);
  const xv = el.a * (Math.cos(E) - el.e);
  const yv = el.a * (Math.sqrt(1 - el.e * el.e) * Math.sin(E));
  const v = Math.atan2(yv, xv);
  const r = Math.sqrt(xv * xv + yv * yv);
  const vw = v + el.w * RAD;
  const xh = r * (Math.cos(el.N * RAD) * Math.cos(vw) -
    Math.sin(el.N * RAD) * Math.sin(vw) * Math.cos(el.i * RAD));
  const yh = r * (Math.sin(el.N * RAD) * Math.cos(vw) +
    Math.cos(el.N * RAD) * Math.sin(vw) * Math.cos(el.i * RAD));
  const zh = r * (Math.sin(vw) * Math.sin(el.i * RAD));
  return [xh, yh, zh];
}

/** Geocentric ecliptic longitude for a planet given its heliocentric elements. */
function geocentricLongitude(el: OrbitalElements, d: number): number {
  const [px, py] = heliocentricXYZ(el);
  // Earth heliocentric position from the Sun's elements (a in AU, r in AU)
  const sun = sunElements(d);
  const Es = solveKeplerE(sun.M, sun.e);
  const xs = Math.cos(Es) - sun.e;
  const ys = Math.sqrt(1 - sun.e * sun.e) * Math.sin(Es);
  const vs = Math.atan2(ys, xs);
  const rs = Math.sqrt(xs * xs + ys * ys);
  const sunGeoLon = rev((vs + sun.w * RAD) * DEG); // geocentric Sun longitude
  const ex = rs * Math.cos((sunGeoLon + 180) * RAD);
  const ey = rs * Math.sin((sunGeoLon + 180) * RAD);
  return rev(Math.atan2(py - ey, px - ex) * DEG);
}

/** Tropical ecliptic longitude of the Sun. */
export function sunLongitude(date: Date): number {
  const d = dayNumber(date);
  const el = sunElements(d);
  const E = solveKeplerE(el.M, el.e);
  const xv = Math.cos(E) - el.e;
  const yv = Math.sqrt(1 - el.e * el.e) * Math.sin(E);
  const v = Math.atan2(yv, xv) * DEG;
  return rev(v + el.w);
}

/** Tropical ecliptic longitude of the Moon, with major perturbation terms. */
export function moonLongitude(date: Date): number {
  const d = dayNumber(date);
  const el: OrbitalElements = {
    N: 125.1228 - 0.0529538083 * d,
    i: 5.1454,
    w: 318.0634 + 0.1643573223 * d,
    a: 60.2666,
    e: 0.0549,
    M: 115.3654 + 13.0649929509 * d,
  };
  let lon = eclipticLongitude(el);

  // Perturbation terms (degrees)
  const sun = sunElements(d);
  const Ms = rev(sun.M);
  const Mm = rev(el.M);
  const D = rev(el.N + el.w + el.M - (sun.w + sun.M)); // mean elongation... computed below properly
  const Lm = rev(el.N + el.w + el.M); // mean longitude of the Moon
  const Ls = rev(sun.w + sun.M); // mean longitude of the Sun
  const elong = rev(Lm - Ls);
  const F = rev(Lm - el.N); // argument of latitude
  const s = (x: number) => Math.sin(rev(x) * RAD);
  void D;
  lon +=
    -1.274 * s(Mm - 2 * elong) +
    0.658 * s(2 * elong) +
    -0.186 * s(Ms) +
    -0.059 * s(2 * Mm - 2 * elong) +
    -0.057 * s(Mm - 2 * elong + Ms) +
    0.053 * s(Mm + 2 * elong) +
    0.046 * s(2 * elong - Ms) +
    0.041 * s(Mm - Ms) +
    -0.035 * s(elong) +
    -0.031 * s(Mm + Ms) +
    -0.015 * s(2 * F - 2 * elong) +
    0.011 * s(Mm - 4 * elong);
  return rev(lon);
}

/** Tropical ecliptic longitude of Saturn. */
export function saturnLongitude(date: Date): number {
  const d = dayNumber(date);
  return geocentricLongitude({
    N: 113.6634 + 2.3898e-5 * d,
    i: 2.4886,
    w: 339.3939 + 2.97661e-4 * d,
    a: 9.55475,
    e: 0.055861,
    M: 316.967 + 0.0334442282 * d,
  }, d);
}

/** Tropical ecliptic longitude of Venus (low precision, sign-level). */
export function venusLongitude(date: Date): number {
  const d = dayNumber(date);
  return geocentricLongitude({
    N: 76.6799 + 2.4659e-5 * d,
    i: 3.3946,
    w: 54.891 + 1.38374e-5 * d,
    a: 0.72333,
    e: 0.006773,
    M: 48.0052 + 1.6021302244 * d,
  }, d);
}

/** Tropical ecliptic longitude of Mercury (low precision, sign-level). */
export function mercuryLongitude(date: Date): number {
  const d = dayNumber(date);
  return geocentricLongitude({
    N: 48.3313 + 3.24587e-5 * d,
    i: 7.0047,
    w: 29.1241 + 1.01444e-5 * d,
    a: 0.387098,
    e: 0.205635,
    M: 168.6562 + 4.0923344368 * d,
  }, d);
}

/** Lahiri ayanamsa in degrees for the given date (linear approximation). */
export function lahiriAyanamsa(date: Date): number {
  const year =
    date.getUTCFullYear() +
    (date.getUTCMonth() + date.getUTCDate() / 31) / 12;
  return 23.853 + (year - 2000) * 0.013969;
}

/** Convert a tropical longitude to sidereal (Lahiri). */
export function toSidereal(tropicalLon: number, date: Date): number {
  return rev(tropicalLon - lahiriAyanamsa(date));
}

export const ZODIAC_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
] as const;

export function signOf(longitude: number): { index: number; name: string; degreeInSign: number } {
  const lon = rev(longitude);
  const index = Math.floor(lon / 30);
  return { index, name: ZODIAC_SIGNS[index], degreeInSign: lon - index * 30 };
}

export const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni",
  "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha",
  "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana",
  "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati",
] as const;

const NAKSHATRA_SPAN = 360 / 27;

export function nakshatraOf(siderealMoonLon: number): {
  index: number;
  name: string;
  pada: number;
  degreeInNakshatra: number;
} {
  const lon = rev(siderealMoonLon);
  const index = Math.floor(lon / NAKSHATRA_SPAN);
  const degreeInNakshatra = lon - index * NAKSHATRA_SPAN;
  const pada = Math.floor(degreeInNakshatra / (NAKSHATRA_SPAN / 4)) + 1;
  return { index, name: NAKSHATRAS[index], pada, degreeInNakshatra };
}

/**
 * Ascendant (tropical) for a birth moment and place.
 * lat/lon in degrees (east positive). Uses local sidereal time.
 */
export function ascendant(date: Date, latDeg: number, lonDeg: number): number {
  const d = dayNumber(date);
  const sun = sunElements(d);
  const Ls = rev(sun.w + sun.M); // mean longitude of the Sun
  const gmst0Hours = rev(Ls + 180) / 15; // GMST at 0h UT, hours
  const ut =
    date.getUTCHours() +
    date.getUTCMinutes() / 60 +
    date.getUTCSeconds() / 3600;
  const lstHours = gmst0Hours + ut * 1.00273790935 + lonDeg / 15;
  const ramc = rev(lstHours * 15) * RAD; // right ascension of midheaven
  const eps = 23.4393 * RAD; // obliquity
  const lat = latDeg * RAD;
  const asc = Math.atan2(
    Math.cos(ramc),
    -(Math.sin(ramc) * Math.cos(eps) + Math.tan(lat) * Math.sin(eps))
  );
  return rev(asc * DEG);
}
