import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-4xl text-[#555273] tracking-widest">
            About Me
          </p>
          <h2 className="py-8">Who am I?</h2>
          <p className="py-2">//Hello, I am Michael Lam!</p>
          <p className="py-2">
            I am a recent graduated computer science student from Wilfrid
            Laurier University. I can develop responsive websites from scratch
            to modern user-friendly web experiences.
          </p>
          <p className="py-2">
            I am always passionate about transforming my creative thoughts and
            ideas into websites over years. I am strive to learn about the
            newest technologies and framework.
          </p>
          <p className="py-2">
            Aside from work, I love to spend my times to go camping with
            friends, and I enjoy the world of modern men’s fashion and style,
            where I would read a fashion news, watch a documentary, and look at
            a fashion photography...etc.
          </p>
          <p className="py-2">
            I call myself a Cityboy, where I discover all “good” things from
            every corner in the world with my “POP-eyes”.
          </p>
          <p className="py-3 underline cursor-pointer">
            Check out some of my recent projects
          </p>
        </div>
        <div className="flex flex-col h-full ">
          <Image
            src="/assets/about-image-1.png"
            alt="/"
            width="425"
            height="50"
            className="py-4 hover:scale-110 p-6 ease-in duration-300"
          />
          <Image
            src="/assets/about-image-2.png"
            alt="/"
            width="325"
            height="50"
            className="py-4 object-right hover:scale-110 p-6 ease-in duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
