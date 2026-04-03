"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  ArrowRightLeft,
  Bot,
  CircleHelp,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";

import { accounts, user } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { BarclaysLogo } from "./common/barclays-logo";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/transactions", icon: ArrowRightLeft, label: "Transactions" },
  { href: "/transfer", icon: ArrowRightLeft, label: "Transfer" },
  { href: "/ai-assistant", icon: Bot, label: "AI Assistant" },
  { href: "/support", icon: CircleHelp, label: "Support" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  const navigation = (
    <nav className="flex flex-col gap-2 p-2">
      {navItems.map((item) => (
        <Button
          key={item.label}
          variant={pathname === item.href ? "secondary" : "ghost"}
          className="justify-start gap-2"
          asChild
        >
          <Link href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BarclaysLogo className="h-8 w-8 text-primary" />
              <span className="">Barclays UK</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">{navigation}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0">
                <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <BarclaysLogo className="h-8 w-8 text-primary" />
                        <span className="">Barclays UK</span>
                    </Link>
                </div>
                <div className="py-2">{navigation}</div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <div className="relative ml-auto flex-1 md:grow-0">
                <p className="text-right text-sm text-muted-foreground">Available balance</p>
                <p className="text-right text-lg font-bold">
                    {new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(totalBalance)}
                </p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint={user.avatarHint} />
                  <AvatarFallback>{user.avatarFallback}</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
              <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login"><LogOut className="mr-2 h-4 w-4" />Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background overflow-auto">
            {children}
        </main>
        <footer className="border-t bg-muted/40 px-6 py-4">
            <p className="text-center text-xs text-muted-foreground">
                © 2024 Barclays PLC. This is a simulated application for demonstration purposes. Not a real banking service.
            </p>
        </footer>
      </div>
    </div>
  );
}
