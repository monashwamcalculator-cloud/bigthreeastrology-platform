/**
 * life-path.ts — pure Life Path number calculation (added 3 Nov 2026,
 * Road to 100 BUILD #1: the dedicated /tools/life-path-number calculator).
 *
 * Method: component-wise reduction, the standard taught method. Month,
 * day and year are each reduced separately to a root number, preserving
 * master numbers 11, 22 and 33 at every stage; the three roots are then
 * added and reduced the same way. Every reduction step is returned as a
 * human-readable line so the page can show its working — that step
 * display is the tool's differentiator.
 */

export const MASTER_NUMBERS: number[] = [11, 22, 33];
export const KARMIC_DEBT_NUMBERS: number[] = [13, 14, 16, 19];

export function digitSum(n: number): number {
  return n
    .toString()
    .split("")
    .reduce((acc, d) => acc + parseInt(d, 10), 0);
}

export type Reduction = {
  /** Final root value (1–9, or a preserved master number 11/22/33). */
  value: number;
  /** Step lines explaining how the value was reached, e.g. "29 → 2 + 9 = 11". */
  lines: string[];
};

/** Reduce one component, preserving master numbers at every stage. */
export function reduceComponent(input: number): Reduction {
  const lines: string[] = [];
  let current = input;
  if (MASTER_NUMBERS.includes(current)) {
    lines.push(`${current} is a master number — it is kept, not reduced`);
    return { value: current, lines };
  }
  while (current > 9) {
    const digits = current.toString().split("").join(" + ");
    const next = digitSum(current);
    if (MASTER_NUMBERS.includes(next)) {
      lines.push(
        `${current} → ${digits} = ${next} — a master number, so it stops here`
      );
      current = next;
      break;
    }
    lines.push(`${current} → ${digits} = ${next}`);
    current = next;
  }
  return { value: current, lines };
}

export type LifePathResult = {
  month: Reduction;
  day: Reduction;
  year: Reduction;
  /** The three component roots added together, before the final reduction. */
  componentSum: number;
  final: Reduction;
  lifePath: number;
  /** 13/14/16/19 when the component sum itself is a karmic-debt number, else null. */
  karmicDebt: number | null;
};

export function computeLifePath(
  year: number,
  month: number,
  day: number
): LifePathResult {
  const m = reduceComponent(month);
  const d = reduceComponent(day);
  const y = reduceComponent(year);
  const componentSum = m.value + d.value + y.value;
  const final = reduceComponent(componentSum);
  return {
    month: m,
    day: d,
    year: y,
    componentSum,
    final,
    lifePath: final.value,
    karmicDebt: KARMIC_DEBT_NUMBERS.includes(componentSum)
      ? componentSum
      : null,
  };
}
