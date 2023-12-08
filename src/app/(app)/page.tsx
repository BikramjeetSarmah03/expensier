import AddButton from "@/components/add-button";
import DataTable from "@/components/common/data-table";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

export default async function Home() {
  const profile = await initialProfile();

  if (!profile) {
    redirect("/sign-in");
  }

  return (
    <div className="h-full p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-40 w-full bg-yellow-100 border p-4 hover:shadow cursor-pointer transition-all duration-300">
          <span className="text-xl lg:text-2xl font-serif font-semibold">
            Current Balance
          </span>
          <h1 className="text-3xl font-serif font-bold text-yellow-500">
            1000
          </h1>
        </div>
        <div className="h-40 w-full bg-red-200 p-4 border hover:shadow cursor-pointer transition-all duration-300">
          <span className="text-xl lg:text-2xl font-serif font-semibold">
            Expenses
          </span>
          <h1 className="text-3xl font-serif font-bold text-red-500">- 1000</h1>
        </div>
        <div className="h-40 w-full bg-green-200 p-4 border hover:shadow cursor-pointer transition-all duration-300">
          <span className="text-xl lg:text-2xl font-serif font-semibold">
            Gains
          </span>
          <h1 className="text-3xl font-serif font-bold text-green-500">
            + 1000
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        <div className="border p-4">
          <h1 className="font-serif underline text-lg">Expenses</h1>
          <DataTable />
        </div>
        <div className="border p-4">
          <h1 className="font-serif underline text-lg">Gains</h1>
          <DataTable />
        </div>
      </div>

      <AddButton />
    </div>
  );
}
