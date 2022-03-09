import NewsList from "@/components/NewsList";
import { getNewsForYear } from "@/lib/news";
import React from "react";

const FilteredNewsPage = ({ params }) => {
  const newsYear = getNewsForYear(params.year);
  return <NewsList news={newsYear} />;
};

export default FilteredNewsPage;
