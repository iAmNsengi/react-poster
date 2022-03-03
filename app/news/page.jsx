import Link from "next/link";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";

const page = () => {
  return (
    <div>
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>{newsItem.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
