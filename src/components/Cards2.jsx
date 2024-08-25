import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

import { Label } from "./ui/label";

const filterDta = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "FullStack Developer",
      "Data Scientist",
      "Researcher",
    ],
  },
  {
    filterType: "Salery",
    array: ["10K-20K", "20K-30K", "30K-40K", "40K-50K", "50K-60K"],
  },
];

function Cards2() {
  return (
    <>
      <div className="w-full bg-white p-3 rounded-md border shadow-xl border-gray-200 ">
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3" />
        <RadioGroup>
          {filterDta.map((item, index) => (
            <div key={index}>
              <h1>{item.filterType}</h1>
              {item.array.map((subItem, subIndex) => (
                <div
                  key={subIndex}
                  className="flex items-center space-x-2 my-2"
                >
                  <RadioGroupItem value={subItem} id={subItem} />
                  <Label htmlFor={subItem}>{subItem}</Label>
                </div>
              ))}
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
}

export default Cards2;
