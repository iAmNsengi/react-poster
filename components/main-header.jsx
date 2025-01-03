import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./nav-link";

const MainHeader = () => {
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
            <NavLink href={"news"}>News</NavLink>
          </li>
          <li>
            <NavLink href={"archive"}>Archive</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
