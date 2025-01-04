"use client";
import { PinContainer } from '../components/ui/3d-pin'
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <section className='grid lg:grid-cols-2 xm:grid-cols-1 mt-[200px] mb-[150px]  xs:mt-[200px] justify-center items-center gap-10 '>
      <div className="h-[20rem]  w-full flex items-center justify-center mb-8">
        <PinContainer
          title="LinkedIn"
          href="https://www.linkedin.com/in/ousmane-diallo-005ab7246/"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Ousmane Diallo
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Connect with me on LinkedIn and lets foster a lasting relationship.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
      
      <div className="px-4 sm:px-8 text-wrap">
        <h1 className="text-3xl font-bold text-slate-900 mb-4 sm:text-wrap xs:text-center xs:mt-[-200px]">About Me 🧑🏾‍💻</h1>
        <p className="text-base text-slate-700 mb-3">
          As a dedicated student ambassador for IBM Z and a member of the NYC Job CEO Council, I am passionate about driving innovation and fostering growth within the tech community. Currently a junior at City Tech majoring in Computer Systems, I also serve as the Google Developer Group On-Campus organizer, where I connect students with industry opportunities and foster a thriving tech ecosystem on campus. Through my involvement in impactful events with organizations like IBM and Google, I continually seek to expand my knowledge in AI, software engineering, and leadership, with a long-term goal of becoming a CEO in the tech industry. My journey is defined by collaboration, learning, and a commitment to making a positive impact on the tech community.
        </p>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button" onClick={() => navigate("/resume")}
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 "
      >
        
        <span>Read Resume 📋</span>
      </HoverBorderGradient>
      </div>
    </section>
  )
}

export default About
