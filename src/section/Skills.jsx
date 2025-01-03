"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

function Skills() {
  return (<>
    <h1 className="text-center py-2 text-4xl">Empowering Innovation Through Skill</h1>
    <p className="text-center w-full sm:w-[100%] md:w-[50%] mx-auto py-5 text-gray-400">
    Harnessing a diverse set of technical and creative skills to drive innovation, solve complex problems, and transform ideas into impactful solutions.
  </p>
  
    <div
      className="py-10 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto">
      <Card title="REACTJS" 
      icon={<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png '  width={80} height={80} alt=''/>}>
        <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
      </Card>
      <Card title="Scripting language" 
icon={<img src='https://www.svgrepo.com/show/374046/rexx.svg ' width={80} height={80} alt=''/>}>
  <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
</Card>
      <Card title="NEXTJS" icon={<img src='https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png' width={80} height={80} alt=''/>}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2} />
          
        {/* Radial gradient for the cute fade */}
        <div
          className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card title="NODEJS" icon={<img src='https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp' width={80} height={80} alt=''/>}>
  <CanvasRevealEffect
    animationSpeed={3}
    containerClassName="bg-black"
    colors={[
      [34, 139, 34], // Forest Green
    [50, 205, 50],
    ]}
    dotSize={3} />
    
  {/* Radial gradient for the cute fade */}
  <div
    className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
</Card>
      <Card title="COBOL" icon={<img src="https://images.javatpoint.com/tutorial/cobol/images/cobol-tutorial.png"  width={80} height={80}/>}>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]} />
      </Card>
    </div>
  </>);
}
export default Skills

const Card = ({
  title,
  icon,
  children
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    (<div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-[20rem] mx-auto p-4 relative h-[10rem] relative">
      <Icon className="absolute h-6  w-6 items-center justify-center -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon
        className="absolute  h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>)
  );
};




















export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};
