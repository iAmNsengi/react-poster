"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href }) => {
  const pathName = usePathname();

  return (
    <Link
      href={`/${href}`}
      className={pathName.startsWith(`/${href}`) ? "active" : undefined}
    >
      {`${href[0].toUpperCase()}${href.slice(1, href.length)}`}
    </Link>
  );
};

export default NavLink;
