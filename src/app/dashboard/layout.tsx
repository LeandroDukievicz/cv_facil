import { ReactNode } from "react";
import Logo from "@/app/assets/logo.svg";
import { NavItems } from "@/components/dashboard/nav-items";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full h-screen overflow-hidden grid grid-cols-[300px,1fer]">
      <aside className="w-full h-full flex flex-col items-center border-r border-muted">
        <div className="w-full p-6 border-b border-muted">
          <Logo className="max-w-[60px] mx-auto" />
        </div>
        <NavItems />
      </aside>
      <main>{children}</main>
    </div>
  );
}
