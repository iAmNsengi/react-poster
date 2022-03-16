import NewsList from "@/components/NewsList";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";
import React from "react";

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];
  let news;

  if (selectedYear) {
    news = getNewsForYear(selectedYear);
  }
  let newsContent = <p>No news found for the selected period!</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const links = getAvailableNewsYears();
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link} </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
