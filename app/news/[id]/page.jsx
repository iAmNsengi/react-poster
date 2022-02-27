import React from "react";



const SingleNews = ({ params }) => {
  const { id } = params;

  return <div>This is my test news page: {id}</div>;
};

export default SingleNews;
