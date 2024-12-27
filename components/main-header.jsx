import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>News</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainHeader;
