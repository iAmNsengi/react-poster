import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="error">
      <h1>Not Found</h1>
      <p>The requested resource couldn't be found!</p>
      <p>
        <Link href={"/"}>Go Back Home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
