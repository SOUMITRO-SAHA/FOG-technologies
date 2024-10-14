import * as React from "react";

import { Sidebar, ThirdSideBar } from "@/app/_components/navigation";
import MainLayout from "../_layout/main-layout";

const DashboardLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  return (
    <main className="flex items-center justify-between w-screen h-screen overflow-hidden">
      <MainLayout>
        {/* Side Bar */}
        <section className="w-[15%]">
          <Sidebar />
        </section>

        {/* Body */}

        <section className="body-background h-screen w-[70%]">
          {children}
        </section>

        {/* 3rd Side Bar */}
        <section className="w-[15%]">
          <ThirdSideBar />
        </section>
      </MainLayout>
    </main>
  );
};

export default DashboardLayout;
