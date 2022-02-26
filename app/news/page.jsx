import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <p>Latest News:</p>
      <Link href={"/news/johndoe"}>John Doe Killed someone</Link>
    </div>
  );
};

export default page;
