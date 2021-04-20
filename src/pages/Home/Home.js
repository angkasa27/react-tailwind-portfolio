import React, { useEffect, useState } from 'react';
import Modal from './ModalGithub';
import main from '../../assets/main.svg';
import image2 from '../../assets/2.jpg';

export default function Home() {
  let listener = null;
  const [scrollState, setScrollState] = useState('top');
  const [open, setOpen] = useState(false);

  const scrollNav = () => {
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        if (scrollState !== 'showUp') {
          setScrollState('showUp');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  };

  useEffect(() => {
    scrollNav();
  }, [scrollState]);

  return (
    <div>
      {scrollState === 'showUp' && <Nav />}
      <div
        id="home"
        className="h-screen overflow-hidden p-2 md:p-5 flex justify-center"
      >
        <div className="bg-primary-2 sm:bg-gradient-to-r from-primary-1 to-primary-2 rounded-xl h-full w-full flex flex-col items-center">
          <Top />
          <div className="md:max-w-screen-2xl w-full flex justify-center">
            <Section1 />
          </div>
        </div>
      </div>
      <Footer />
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export function Top() {
  return (
    <div className="w-full z-20">
      <nav className="flex justify-between px-8 py-4 items-center text-white ">
        <div className="flex items-baseline">
          <h1 className="text-xl font-bold tracking-wide md:mr-8">
            Dimas Angkasa
          </h1>
          <div className="hidden md:flex">
            <a
              href="#tentang"
              className="mx-4 border-white hover:font-bold transition-default"
            >
              Highlight
            </a>
            <a
              href="#fitur"
              className="mx-4 border-white hover:font-bold transition-default"
            >
              All Projects
            </a>
            <a
              href="#tutorial"
              className="mx-4 border-white hover:font-bold transition-default"
            >
              Social Media
            </a>
          </div>
        </div>
        <div>
          <button className="btn-main bg-white bg-glass bg-opacity-30 ">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 fill-current text-white mr-2"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Github
          </button>
        </div>
      </nav>
    </div>
  );
}

export function Nav() {
  return (
    <div className="z-30 w-screen fixed bg-white shadow-md animate-navDown">
      <nav className="flex justify-between px-16 py-4 items-center text-gray-700 ">
        <div className="flex items-baseline">
          <h1 className="text-2xl font-bold tracking-wide">Phine</h1>
          <h3 className="text-xl font-bold text-green-500 ">.com</h3>
        </div>
        <div>
          <a
            href="#tentang"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            About
          </a>
          <a
            href="#fitur"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            Feature
          </a>
          <a
            href="#tutorial"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            Location
          </a>
        </div>
        <div>
          <button className="py-2 px-4 bg-green-500 hover:bg-green-600 transition-default rounded-full flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book An Apointment
          </button>
        </div>
      </nav>
    </div>
  );
}

export function Section1() {
  return (
    <section
      id="section1"
      className="h-full md:max-h-96 grid grid-cols-1 md:grid-cols-2 w-full grid-rows-2 md:grid-rows-1"
    >
      <div className="relative col-span-1 md:col-start-2 bg-red-300">
        <div className="w-56 h-56  md:w-80 md:h-80 bg-orange  absolute rounded-full opacity-90 top-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/4" />
        <img
          src={main}
          alt=""
          className="animate-upDown absolute w-full md:w-96 md:left-20 md:transform translate-x-1/2 top-5 z-20"
        />
      </div>
      <div className="text-white col-span-1 md:col-start-1 md:row-start-1 md:pl-16 justify-start flex items-center md:items-start flex-col  pt-24 md:pt-40">
        <h1 className="text-4xl md:text-6xl text-center font-bold tracking-wider md:text-left">
          Welcome to my
        </h1>
        <h1 className="text-4xl md:text-6xl text-center font-bold tracking-wider md:text-left">
          Github Pages
        </h1>
        <p className="text-center md:text-lg md:text-left mt-2 ">
          Disini kamu dapat menemukan semua <br /> website karya Dimas Angkasa
        </p>
        <a
          href="#tentang"
          className="text-white flex items-center animate-scrollDown pt-8 md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 mr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
          Scroll to Discover
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <div>
      <div className="py-2 bg-gray-700 text-sm font-mono text-white flex justify-center">
        <p>{'Create with'}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 text-red-500 mx-2"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
        <p>{'by'}</p>
        <a
          href="https://github.com/angkasa27"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-500 cursor-pointer ml-2"
        >
          angkasa27
        </a>
      </div>
    </div>
  );
}
