"use client";

import { Sidebar, SidebarLogo, SidebarItems, SidebarItemGroup, SidebarItem } from "flowbite-react";
import { HomeIcon, SunIcon, LightBulbIcon } from '@heroicons/react/24/outline'

export function AppSidebar() {
    return (
        <div className="h-full w-64 border-r bg-white dark:bg-gray-900">
            <Sidebar aria-label="Sidebar" className="h-full">
                <SidebarLogo
                    href="/dashboard"
                    img="/Smart_Home.svg"
                    imgAlt="Smart Home Logo"
                >
                    S-H
                </SidebarLogo>

                <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem href="/dashboard" icon={HomeIcon}>
                            Overview
                        </SidebarItem>

                        <SidebarItem href="/rooms/living-room" icon={SunIcon}>
                            Obývačka
                        </SidebarItem>

                        <SidebarItem href="/rooms/kitchen" icon={LightBulbIcon}>
                            Kuchyňa
                        </SidebarItem>
                    </SidebarItemGroup>
                </SidebarItems>
            </Sidebar>
        </div>
    );
}