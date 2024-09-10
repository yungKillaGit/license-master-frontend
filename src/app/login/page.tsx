import { authProviderServer } from "@providers/auth-provider";
import { AuthPage } from "@refinedev/mantine";
import { redirect } from "next/navigation";

export default async function Login() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/");
  }

  return <AuthPage
      type="login"
      formProps={{
          initialValues: {
            email: "demo@refine.dev",
            password: "demodemo",
          },
      }}
    title='License Master'
  />
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
    error,
  };
}
