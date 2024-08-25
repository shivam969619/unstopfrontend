import React from "react";
import { Button } from "./ui/button";
import { Bookmark, Ghost } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import comapnylogo from "../assets/download (1).jpeg";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";

function Cards3() {
  return (
    <>
      <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
        <p className="text-sm text-gray-600">2 days Ago</p>

        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
        <div className="flex items-center gap-2 my-2">
          <Button variant="outline">
            <Avatar variant="">
              <AvatarImage src={comapnylogo} className="h-full w-full" />
            </Avatar>
          </Button>
          <div>
            <h1>Company name</h1>
            <p>India</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-600">Title</h1>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            expedita quae repellat eos quaerat sed, asperiores accusamus a
            praesentium veniam.
          </p>
        </div>
        <div className="flex-items-center gap-2 mt-4">
          <Badge className={"text-blue-700 font-bold"} variant={Ghost}>
            12 Positions
          </Badge>
          <Badge className={"text-[#F83002] font-bold"} variant={Ghost}>
            12 Positions
          </Badge>
          <Badge className={"text-[#7209b7] font-bold"} variant={Ghost}>
            12 Positions
          </Badge>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Button>
            <Link to={"/description/:id"}>Details</Link>
          </Button>
          <Button className="bg-[#7209b7]">Save for later</Button>
        </div>
      </div>
    </>
  );
}

export default Cards3;
