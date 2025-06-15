import React from 'react';
import { Link } from 'react-scroll';

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-center space-x-6 font-outfit text-sm text-[#005DAA] sticky top-0 z-50">
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:underline"
      >
        About Me
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:underline"
      >
        Experience
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:underline"
      >
        Skills
      </Link>
      <Link
        to="education"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:underline"
      >
        Education
      </Link>
    </nav>
  );
}