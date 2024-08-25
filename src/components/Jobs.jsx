import React from "react";
import Navbar from "./shared/Navbar";
import Cards2 from "./Cards2";
import Cards3 from "./Cards3";

const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function Jobs() {
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto mt-5 pl-3">
          <div className="flex gap-5">
            <div className="md:w-[20%] w-[30%]">
              <Cards2 />
            </div>
            <div className="flex-1 h-[90vh] overflow-y-auto pb-5">
              {JobsArray.length <= 0 ? (
                <span>Jobs Not found</span>
              ) : (
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                  {JobsArray.slice(0, 6).map((item, index) => (
                    <Cards3 key={index} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
