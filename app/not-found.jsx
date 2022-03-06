import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div id="error">
      <h1>Not Found</h1>
      <p>The requested resource couldn't be found!</p>
      <li>
        <Link href={"/"}>Go Back Home</Link>
      </li>
    </div>
  );
};

export default NotFoundPage;
