import { DashboardStats } from "./components/DashboardStats";
import { SalesChart } from "./components/SalesChart";
import { DealsTable } from "./components/DealsTable";

export default function Home() {
  return (
    <div className="space-y-7.5">
      <h1 className="text-[32px] font-bold tracking-tight text-[#202224]">Dashboard</h1>
      
      <DashboardStats />
      
      <div className="grid gap-6">
        <SalesChart />
        <DealsTable />
      </div>
    </div>
  );
}
