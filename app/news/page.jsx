import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul className="news-list">
        <li>
          <Link href={"/news/johndoe"}>John Doe Killed someone</Link>
        </li>
        <li>
          <Link href={"/news/johndoe"}>John Doe Killed someone</Link>
        </li>
        <li>
          <Link href={"/news/johndoe"}>John Doe Killed someone</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
