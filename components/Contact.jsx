import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-4xl text-[#555273] tracking-widest">
          Contact
        </p>
        <h2 className="my-10">Let's get connected</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 border-4 border-black">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  width={800}
                  height={800}
                  className="rounded-xl group-hover:scale-105 ease-in duration-100"
                  src="/../public/assets/network.png"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-4">Michael Lam</h2>
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for part-tiem or full-time positions. Contact
                  me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex">
                  <div className="cursor-pointer hover:scale-110 p-6 ease-in duration-300">
                    <Icon
                      icon="mdi:post"
                      style={{ fontSize: '50px', color: 'black' }}
                    />
                  </div>
                  <div className="cursor-pointer hover:scale-110 p-6 ease-in duration-300">
                    <Icon
                      icon="mdi:linkedin"
                      style={{ fontSize: '50px', color: 'black' }}
                    />
                  </div>
                  <div className="cursor-pointer hover:scale-110 p-6 ease-in duration-300">
                    <Icon
                      icon="mdi:github"
                      style={{ fontSize: '50px', color: 'black' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 border-4 border-black">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="text-black uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 border-gray-400 rounded-lg p-3 flex"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-black uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 border-gray-400 rounded-lg p-3 flex"
                      type="text"
                      placeholder="**Optional"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-black uppercase text-sm py-2">
                    E-mail
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-lg p-3 flex"
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="text-black uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    className="border-2 border-gray-400 rounded-lg p-3 flex"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-black uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 border-gray-400 rounded-lg p-3 flex"
                    rows="10"
                  />
                </div>
                <button className="w-full p-5 mt-5 bg-gradient-to-r from-[#555273] to-[#a0bcf7]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-gray-400 cursor-pointer hover:scale-110 ease-in duration-100">
            <Icon
              icon="material-symbols:arrow-drop-up-rounded"
              style={{ fontSize: '80px', color: '#555273' }}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
