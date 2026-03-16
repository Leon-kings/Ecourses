import React from "react";
import { Hero } from "../../components/hero/Hero";
import { About } from "../about/About";
import { Services } from "../services/Services";
import { Courses } from "../courses/Courses";
import { Team } from "../team/TeamMember";
import { Blog } from "../blog/Blogs";

export const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Services />
      <Courses />
      <Team />
      <Blog />
    </div>
  );
};
