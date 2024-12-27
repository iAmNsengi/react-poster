import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="error">
      <h1>Not Found</h1>
      <p>Unfortunately the article your looking for couldn't be found!</p>
      <p>
        <Link href={"/news"}>Go Back to News</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
