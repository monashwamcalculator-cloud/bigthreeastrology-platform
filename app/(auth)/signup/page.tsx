import { registerAction } from "@/app/(auth)/actions";

export default function SignupPage() {
  return (
    <form className="mx-auto max-w-md space-y-3 rounded-xl border border-indigo-400/30 bg-black/30 p-5" action={registerAction}>
      <h1 className="text-xl font-bold">Create account</h1>
      <input name="name" placeholder="Name" className="w-full rounded bg-black/40 p-2" required />
      <input name="email" type="email" placeholder="Email" className="w-full rounded bg-black/40 p-2" required />
      <input name="password" type="password" placeholder="Password" className="w-full rounded bg-black/40 p-2" required />
      <select name="role" className="w-full rounded bg-black/40 p-2">
        <option value="USER">I am a user</option>
        <option value="ASTROLOGER">I am an astrologer</option>
      </select>
      <button className="w-full rounded bg-indigo-600 p-2 font-semibold">Sign Up</button>
    </form>
  );
}
