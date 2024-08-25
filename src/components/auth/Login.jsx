import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_END_POINT } from "@/constants";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import store from "@/redux/store";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventhandler = (e) => {
    const { name, value, type, files } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleRadioChange = (value) => {
    setInput((prevInput) => ({
      ...prevInput,
      role: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);

    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/home");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={handleClick}
          className="w-full max-w-md border border-gray-200 rounded-md p-4 my-10 shadow-md"
        >
          <h1 className="font-bold text-2xl mb-5 text-center">Log In</h1>
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={changeEventhandler}
              placeholder="shivam7214376@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={changeEventhandler}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <RadioGroup
              defaultValue={input.role}
              onValueChange={handleRadioChange}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="recruiter" id="recruiter" />
                <Label htmlFor="recruiter">recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button className="w-full my-4" type="submit">
              Log In
            </Button>
          )}

          <span className="text-sm">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-500">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
