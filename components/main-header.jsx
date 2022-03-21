"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainHeader = () => {
  const pathName = usePathname();
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={"/"}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link
              href={"/news"}
              className={pathName.startsWith("/news") ? "active" : undefined}
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href={"/archive"}
              className={pathName.startsWith("/archive") ? "active" : undefined}
            >
              Archive
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
