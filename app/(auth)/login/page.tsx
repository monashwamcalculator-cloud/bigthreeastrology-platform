import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <form
      className="mx-auto max-w-md space-y-3 rounded-xl border border-indigo-400/30 bg-black/30 p-5"
      action={async (formData) => {
        "use server";
        await signIn("credentials", {
          email: String(formData.get("email")),
          password: String(formData.get("password")),
          redirectTo: "/dashboard"
        });
      }}
    >
      <h1 className="text-xl font-bold">Login</h1>
      <input name="email" type="email" placeholder="Email" className="w-full rounded bg-black/40 p-2" required />
      <input name="password" type="password" placeholder="Password" className="w-full rounded bg-black/40 p-2" required />
      <button className="w-full rounded bg-indigo-600 p-2 font-semibold">Sign In</button>
    </form>
  );
}
