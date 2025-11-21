"use client";

import { Navbar, NavbarBrand, NavbarToggle, Avatar, Dropdown, DropdownHeader, DropdownItem, DarkThemeToggle } from "flowbite-react";

export function AppNavbar() {
    return (
        <Navbar fluid rounded className="border-b bg-white dark:bg-gray-900">
            <NavbarBrand href="/dashboard">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Dashboard
        </span>
            </NavbarBrand>

            <div className="flex gap-4 md:order-2 items-center">
                <DarkThemeToggle />

                <Dropdown
                    inline
                    label={<Avatar img="/Avatar.png" rounded />}
                >
                    <DropdownHeader>
                        <span className="block text-sm">John Doe</span>
                        <span className="block truncate text-sm font-medium">john@example.com</span>
                    </DropdownHeader>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>

                <NavbarToggle />
            </div>
        </Navbar>
    );
}