import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import logo from "../assets/download (1).jpeg";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobsTable from "./AppliedJobsTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
// const skills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React.js",
//   "Node.js",
//   "Express.js",
//   "Git/GitHub",
//   "Responsive Design",
//   "TypeScript",
//   "RESTful APIs",
//   "Webpack",
//   "SQL/NoSQL Databases",
// ];
const Profile = () => {
  const [open, setopen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const Resume = true;
  return (
    <>
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={logo} />
              </Avatar>
              <div>
                <h1 className="font-medium text-xl">{user?.fullname}</h1>
                <p>{user?.bio}</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="text-right"
              onClick={() => {
                setopen(true);
              }}
            >
              <Pen Edit />
            </Button>
          </div>
          <div className="my-5 ml-4">
            <div className="flex items-center gap-3 my-2">
              <Mail />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Contact />
              <span>{user?.phoneNumber}</span>
            </div>
            <div className=" ">
              <h1>Skills</h1>
              <div className="flex gap-2 flex-wrap">
                {user?.profile?.skills.length != 0
                  ? user?.profile?.skills.map((item, index) => (
                      <Badge key={index} className="">
                        {item}
                      </Badge>
                    ))
                  : "NA"}
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="text-medium font-bold">Resume</Label>
              {Resume ? (
                <a
                  target="blank"
                  href={user?.profile?.resume}
                  className="text-blue-500 w-full hover:underline cursor-pointer"
                >
                  {user?.profile?.resumeOriginalName}
                </a>
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1>Applied Jobs</h1>
          <AppliedJobsTable />
        </div>
        <UpdateProfileDialog open={open} setopen={setopen} />
      </div>
    </>
  );
};

export default Profile;
