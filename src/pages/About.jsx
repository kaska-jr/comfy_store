import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center mt-6">
        <h1 className="text-3xl font-bold leading-none tracking-tight sm:text-6xl">
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus
        aspernatur pariatur odio quam nulla vitae laboriosam et hic dolorum.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quasi
        perferendis. Reiciendis quasi pariatur cupiditate recusandae illum omnis
        qui molestiae.
      </p>
    </>
  );
};

export default About;
