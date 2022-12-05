import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

const Main = () => {
  return (
    <div id="main" className="w-full h-[120vh] text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <h1 className="py-4 font-bold">Michael Lam</h1>
          <h2 className="py-3 font-semibold">Programmer & Designer</h2>
          <p className="py-4 m-auto">
            Recent computer science graduate, experienced in web development.{' '}
            <br />
            Join me down below and let’s get cracking!
          </p>
          <div className="flex items-center justify-between max-w-[370px] m-auto py-3">
            <div className="cursor-pointer hover:scale-110 p-6 ease-in duration-300">
              <Icon
                icon="mdi:post"
                style={{ fontSize: '67.5px', color: 'black' }}
              />
            </div>
            <div className="cursor-pointer hover:scale-110 p-6 ease-in duration-300">
              <Icon
                icon="mdi:linkedin"
                style={{ fontSize: '67.5px', color: 'black' }}
              />
            </div>
            <div className="cursor-pointer hover:scale-110 p-6 ease-in duration-300">
              <Icon
                icon="mdi:github"
                style={{ fontSize: '67.5px', color: 'black' }}
              />
            </div>
          </div>
          <div className="flex justify-center hover:scale-110 p-6 ease-in duration-300">
            <div className="rounded-full border-4 border-black overflow-hidden">
              <Image
                src="/assets/my-pic.png"
                alt="/"
                width="225"
                height="50"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
