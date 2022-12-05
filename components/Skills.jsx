import React from 'react';
import Image from 'next/image';

const skillsets = [
  {
    key: 1,
    skill: 'HTML',
    image: '/assets/skills/html.png',
  },
  {
    key: 2,
    skill: 'CSS',
    image: '/assets/skills/css.png',
  },
  {
    key: 3,
    skill: 'JAVASCRIPT',
    image: '/assets/skills/javascript.png',
  },
  {
    key: 4,
    skill: 'REACTJS',
    image: '/assets/skills/reactjs.png',
  },
  {
    key: 5,
    skill: 'NODEJS',
    image: '/assets/skills/nodejs.png',
  },
  {
    key: 6,
    skill: 'TAILWIND',
    image: '/assets/skills/tailwind.png',
  },
  {
    key: 7,
    skill: 'FIREBASE',
    image: '/assets/skills/firebase.png',
  },
  {
    key: 8,
    skill: 'GIT & GITHUB',
    image: '/assets/skills/git.png',
  },
  {
    key: 9,
    skill: 'PYTHON',
    image: '/assets/skills/python.png',
  },
  {
    key: 10,
    skill: 'SQL',
    image: '/assets/skills/sql.png',
  },
];

const Skills = () => {
  const skillList = skillsets.map(skills => (
    <div className="flex items-center p-6 border-4 border-black shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-2 justify-center items-center">
        <div className="m-auto" key={skillsets.key}>
          <Image src={skills.image} alt="/" width="225" height="50" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-1xl font-semibold" key={skillsets.key}>
            {skills.skill}
          </h3>
        </div>
      </div>
    </div>
  ));
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-4xl text-[#555273] tracking-widest">
          Skills
        </p>
        <h2 className="py-8">What can I do?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" key={skillList}>
          {skillList}
        </div>
      </div>
    </div>
  );
};

export default Skills;
