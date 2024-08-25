import React from "react";
import Navbar from "./shared/Navbar";
import Cards1 from "./Cards1";
const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Browse = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="ml-4">
          <h1>Search Results ({jobs.length})</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-4 gap-4 my-3 ml-4 mr-4 mt-4">
            {jobs.map((item, index) => {
              return <Cards1 key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
