import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="shadow">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <h1 className="font-semibold text-lg">Expensier</h1>

        <div className="flex items-center gap-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
}
