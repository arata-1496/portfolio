"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { useState } from "react";

const Header = ({ pageType }) => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "/", label: "TOP" },
    { href: "/profile", label: "PROFILE" },
    { href: "/works", label: "WORKS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-5 left-0 w-full z-20">
      <div className="flex max-w-full mx-auto h-full justify-between items-center px-4 md:px-8 lg:px-40">
        {/* ロゴ */}
        {pageType === "other" && (
          <Image
            src="/MV/icon.svg"
            width={317}
            height={60}
            alt="icon"
            className="w-48 md:w-64 lg:w-80 h-auto"
          />
        )}
        {/* PC用nav（lg以上で表示する） */}
        <nav className="hidden lg:flex ml-auto">
          <ul className="flex gap-8 list-none p-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-heebo text-base text-more-deep hover:text-normal transition-colors no-underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* モバイル用ハンバーガーメニュー（lg未満で表示） */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden ml-auto">
            <button
              className="p-2 hover:bg-more-light/20 rounded-md transition-colors"
              aria-label="メニューを開く"
            >
              <Menu className="w-6 h-6 text-more-deep" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64 bg-p-white">
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-heebo text-lg text-more-deep hover:text-normal transition-colors no-underline"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
