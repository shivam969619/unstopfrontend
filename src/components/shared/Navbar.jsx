import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, Menu, Search, User2 } from "lucide-react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_END_POINT } from "@/constants";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logouthandler = async () => {
    try {
      const res = await axios.get(`${USER_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/home");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div className="bg-white">
        <div className="flex  md:items-center justify-between md:mx-auto max-w-7xl">
          <div className="mt-2 ml-4 flex flex-row gap-3">
            <h1 className="text-2xl font-bold">
              UN<span className="text-[#F83002]">STOP</span>
            </h1>
            <div className="relative flex items-center">
              <Search className="absolute left-3 h-5 w-5 text-gray-500" />
              <Input className="pl-10 pr-4 py-2 rounded-full" />
            </div>
          </div>
          <div className="mt-2">
            <div className="hidden md:flex md:item-center md:gap-2 md:mt-2 ">
              <ul className="md:flex md:font-medium md:items-center md:gap-5 ">
                {user && user.role === "recruiter" ? (
                  <>
                    <li>
                      <Link to="/admin/companies">Companies</Link>
                    </li>
                    <li>
                      <Link to="/admin/jobs">Jobs</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/jobs">Jobs</Link>
                    </li>
                    <li>
                      <Link to="/browse">Browse</Link>
                    </li>
                  </>
                )}
              </ul>
              {!user ? (
                <div>
                  <Link to={"/login"}>
                    <Button
                      variant="oultine"
                      className="bg-blue-500 text-white hover:bg-blue-800 mr-2"
                    >
                      login
                    </Button>
                  </Link>
                  <Link to={"/signup"}>
                    <Button
                      variant="oultine"
                      className="bg-blue-500 text-white hover:bg-blue-800 "
                    >
                      Signup
                    </Button>
                  </Link>
                </div>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.profile?.profilePhoto} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex gap-4 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user?.profile?.profilePhoto} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user.fullname}</h4>
                        <p className="text-sm text-muted-foreground">
                          {user.bio}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-600">
                      <div className=" flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to={"/profile"}>View Profile</Link>
                        </Button>
                      </div>
                      <div className="flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link" onClick={logouthandler}>
                          Logout
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </div>
            {!user ? (
              <div className="md:hidden flex ">
                <div className="">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Menu className="w-10 h-10 cursor-pointer mr-4" />
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <ul>
                        <li>
                          <Link to={"/home"}>Home</Link>
                        </li>
                        <li>
                          <Link to={"/home"}>Practice</Link>
                        </li>
                        <li>
                          <Link to={"/jobs"}>Jobs</Link>
                        </li>
                        <li>
                          <Link to={"/browse"}>Browse</Link>
                        </li>
                        <li>
                          <Link to={"/login"}>
                            <Button
                              variant="oultine"
                              className="bg-blue-500 text-white hover:bg-blue-800 mr-2 mt-2 w-[100px]"
                            >
                              login
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link to={"/signup"}>
                            <Button
                              variant="oultine"
                              className="bg-blue-500 text-white hover:bg-blue-800 mr-2 mt-2 w-[100px]"
                            >
                              Signup
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ) : (
              <div className="md:hidden flex ">
                <Popover>
                  <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer mr-2">
                      <AvatarImage src={user?.profile?.profilePhoto} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <div className="flex gap-4 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage src={user?.profile?.profilePhoto} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">Shivam Dubey</h4>
                        <p className="text-sm text-muted-foreground">
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-600">
                      <div className=" flex w-fit items-center gap-2 cursor-pointer">
                        <User2 />
                        <Button variant="link">
                          <Link to={"/profile"}>View Profile</Link>
                        </Button>
                      </div>
                      <div className=" flex w-fit items-center gap-2 cursor-pointer">
                        <LogOut />
                        <Button variant="link" onClick={logouthandler}>
                          Logout
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Menu className="w-10 h-10 cursor-pointer mr-4" />
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <ul>
                        {user && user.role === "recruiter" ? (
                          <>
                            <li>
                              <Link to="/admin/companies">Companies</Link>
                            </li>
                            <li>
                              <Link to="/admin/jobs">Jobs</Link>
                            </li>
                          </>
                        ) : (
                          <>
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/jobs">Jobs</Link>
                            </li>
                            <li>
                              <Link to="/browse">Browse</Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
