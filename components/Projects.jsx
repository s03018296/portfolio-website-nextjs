import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projectSets = [
  {
    name: 'Profolio Website',
    skills: 'NextJS, TailwindCSS',
    image: '/assets/projects/sample.png',
    url: '',
  },
  {
    name: 'Daily Quotes Website',
    skills: '',
    image: '/assets/projects/sample.png',
    url: '',
  },
  {
    name: 'Driving School Website',
    skills: '',
    image: '/assets/projects/sample.png',
    url: '',
  },
  {
    name: 'Zillow',
    skills: '',
    image: '/assets/projects/sample.png',
    url: '',
  },
];

const Projects = () => {
  const projectList = projectSets.map(projects => (
    <div className="relative flex items-center justify-center h-auto w-full p-3 border-4 border-black shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#555273] to-[#a0bcf7] hover:scale-105 ease-in duration-300">
      <Image
        width={800}
        height={800}
        className="rounded-xl group-hover:opacity-10"
        src={projects.image}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex flex-col w-80 h-full">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {projects.name}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{projects.skills}</p>
          <div className="grid md:grid-cols-2 gap-2">
            <Link href={projects.url}>
              <p className="text-center py-3 rounded-lg border-4 border-black bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More Info
              </p>
            </Link>
            <Link href={projects.url}>
              <p className="text-center py-3 rounded-lg border-4 border-black bg-white text-gray-700 font-bold text-lg cursor-pointer">
                Live
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div id='projects' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-4xl text-[#555273] tracking-widest">
          Projects
        </p>
        <h2 className="my-10">What have I done?</h2>
        <div className="grid md:grid-cols-2 gap-8">{projectList}</div>
      </div>
    </div>
  );
};

export default Projects;
