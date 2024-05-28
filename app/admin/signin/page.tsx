import { signIn } from "@/auth"
 export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        "use server"
        console.log(formData)
        await signIn("credentials", formData,{redirectTo: "/"})
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
  )
}