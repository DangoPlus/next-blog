import SignOut from "@/components/dashboard/SignOut";
import DashboardData from "@/components/dashboard/DashboardData";
import SignIn from "@/components/dashboard/SignIn";

export default function Dashboard() {
  return (
    <div>
      <DashboardData />
      <SignIn />
      <SignOut />
    </div>
  );
}
