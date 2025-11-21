import React from "react";

import { AppSidebar } from "./Sidebar";
import { AppNavbar } from "./NavBar";

export function AppShell({ children }: { children: React
        .ReactNode }) {
    return (
        <div className="flex h-screen w-screen overflow-hidden">
            {/* Sidebar */}
            <AppSidebar />

            {/* Right side */}
            <div className="flex flex-col flex-1">
                <AppNavbar />

                {/* Page content */}
                <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-800 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}