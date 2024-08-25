import React from "react";
import Cards1 from "./Cards1";
import { useSelector } from "react-redux";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <>
      <div className="max-w-7xl mx-auto my-20 sm:mx-[30px] ">
        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-[#6A38C2]">Latest and Top </span>Job Openings
          </h1>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 my-5 ">
          {/* //multiple job cards */}
          {randomJobs.slice(0, 6).map((item, index) => (
            <Cards1 key={index} />
          ))}
          {allJobs.length <= 0 ? (
            <span>JOb not found</span>
          ) : (
            allJobs.slice(0, 6).map((job) => <Cards1 key={job._id} job={job} />)
          )}
        </div>
      </div>
    </>
  );
};

export default LatestJobs;
