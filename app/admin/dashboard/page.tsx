import { auth } from "@/auth";
import DashboardData from "@/components/dashboard/DashboardData";
import SignIn from "@/components/dashboard/SignIn";
import SignOut from "@/components/dashboard/SignOut";

export default async function Dashboard() {
  const session = await auth();
  console.log(session);
  if (session === null || (session && !session!.user)) return <SignIn />;
  return (
    <div>
      <DashboardData />
      <SignOut />
    </div>
  );
}
