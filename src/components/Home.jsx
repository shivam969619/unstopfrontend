import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Hero from "./Hero";
import Category from "./Category";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAlljobs from "@/hooks/useGetAlljobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  useGetAlljobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default Home;
