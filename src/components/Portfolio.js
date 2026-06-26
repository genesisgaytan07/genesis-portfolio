import React, { useState } from "react";
import { Element } from "react-scroll";
import headshot from "../assets/HeadShot.png";
import Carousel from "./Carousel";
import unitedImage from "../assets/unitedAirlines.png";
import scrapBooth from "../assets/scrapBooth1.png";
import vayner from "../assets/vayner.PNG";
import ultalogo from "../assets/ultalogo.png";
export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen p-6 text-gray-900 bg-gray-50 font-outfit">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center max-w-5xl gap-10 pt-10 mx-auto text-center md:flex-row">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={headshot}
            alt="Genesis Gaytan"
            className="object-cover w-48 h-48 rounded-full shadow-lg md:w-56 md:h-56"
          />
        </div>

        {/* Right: Text & Buttons */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-600">Hello, I'm</p>
          <h1 className="text-4xl font-bold text-[#005DAA]">Genesis Gaytan</h1>
          <p className="mt-1 text-lg">NYU | RTC | WiCyS</p>

          {/* LinkedIn Icon */}
          <div className="flex justify-center mt-4 md:justify-start">
            <a
              href="https://www.linkedin.com/in/genesis-gaytan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="transition hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#005DAA"
                className="transition-transform hover:scale-110"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
              </svg>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col justify-center gap-4 mt-4 sm:flex-row sm:justify-start">
            {/*
            <button
              onClick={() => setShowResume(true)}
              className="inline-block px-6 py-2 bg-[#005DAA] text-white rounded-full hover:bg-[#004C8C] transition"
              type="button"
            >
              View Resume
            </button>
            */}
            <a
              href="mailto:genesisgaytan01@gmail.com"
              className="px-5 py-2 rounded-full bg-[#005DAA] text-white hover:bg-[#004C8C] transition text-center"
            >
              Contact Info
            </a>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-4 rounded-lg max-w-5xl w-full h-[85vh] relative shadow-lg">
            <button
              onClick={() => setShowResume(false)}
              className="absolute text-2xl font-bold text-gray-700 transition top-2 right-3 hover:text-gray-900"
              aria-label="Close resume modal"
              type="button"
            >
              &times;
            </button>
            <iframe
              src={`${process.env.PUBLIC_URL}/Genesis_Gaytan_Resume.pdf`}
              title="Genesis Gaytan Resume"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-16 space-y-20">
        {/* About Me */}
        <Element name="about">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              About Me
            </h2>
            <div className="space-y-4">
              <p>
                Hi, I'm Genesis, a cybersecurity graduate student at New York
                University's Tandon School of Engineering, where I'm part of
                the Cyber Fellows program focused on network defense,
                incident response, and applied cryptography. I earned my
                B.S. in Information Technology and Management from Illinois
                Tech, where I built a foundation in programming,
                cybersecurity, and data analytics.
              </p>
              <p>
                I'm currently a Resident Data Analyst at VaynerMedia, where I
                work with advertising and media performance data to help
                translate numbers into actionable insight. I'm certified in
                Google Cybersecurity and hold a Google Analytics Professional
                Certificate. I'm passionate about strengthening digital
                security while using analytics to uncover meaningful patterns
                in data, and I thrive in collaborative, growth-oriented
                environments where I can apply my technical skills to make a
                real impact.
              </p>
              <p>
                Outside of tech, I'm a violinist and an active member of my
                church community, where I find balance and purpose through
                music and service.
              </p>
            </div>
          </section>
        </Element>

        {/* Carousel Section */}
        <section>
          <Carousel />
        </section>

        {/* Experience */}
        <Element name="experience">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              Experience
            </h2>
            <ul className="space-y-4">
              <li className="flex flex-col items-center justify-between gap-6 p-4 transition bg-white shadow rounded-xl hover:shadow-md sm:flex-row-reverse">
                <img
                  src={vayner}
                  alt="VaynerMedia"
                  className="object-contain w-60 h-60 rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    VaynerMedia
                  </h3>
                  <p className="text-base font-semibold mt-1">
                    Resident, Data Analyst
                  </p>
                  <p className="mt-2">
                    Excited to join VaynerMedia for the next couple of months
                    as a Resident Data Analyst!
                  </p>
                </div>
              </li>

              <li className="flex flex-col items-center justify-between gap-6 p-4 transition bg-white shadow rounded-xl hover:shadow-md sm:flex-row-reverse">
                <img
                  src={ultalogo}
                  alt="Ulta Beauty"
                  className="object-contain w-60 h-60 rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900">
                    Ulta Beauty
                  </h3>
                  <p className="text-base font-semibold mt-1">
                    Order Management System Support Intern
                  </p>
                  <p className="mt-2">
                    Contributed to OMS supporting thousands of daily orders
                    across BOPIS, SDD, and Ship to Store workflows
                  </p>
                  <p className="mt-2">
                    Improved store associate workflow by consolidating BOPIS
                    and SDD orders into a single action button, reducing
                    processing time by ~30%
                  </p>
                  <p className="mt-2">
                    Debugged order release issues with Java, XML, and DB
                    Query, analyzing backend tables to resolve discrepancies
                    that caused failed or delayed orders
                  </p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4 mt-12">
              Projects
            </h2>
            <ul className="space-y-4">

              <li className="flex flex-col items-center justify-between gap-6 p-4 transition bg-white shadow rounded-xl hover:shadow-md sm:flex-row-reverse">
                <img
                  src={scrapBooth}
                  alt="ScrapBooth Logo"
                  className="object-contain w-60 h-60 rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold">ScrapBooth</h3>
                  <p>
                    Inspired by my passion for traveling, I conceptualized
                    ScrapBooth, a 3-tier web application designed to help
                    users organize and share their travel memories.
                  </p>
                </div>
              </li>
                            <li className="flex flex-col items-center justify-between gap-6 p-4 transition bg-white shadow rounded-xl hover:shadow-md sm:flex-row-reverse">
                <img
                  src={unitedImage}
                  alt="United Airlines Logo"
                  className="object-contain w-60 h-60 rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold">
                    IIT Association for Computing Machinery Women – Board
                    Leader
                  </h3>
                  <p>
                    Ran the club's social media accounts and coordinated
                    events. As someone passionate about both technology and
                    travel, one of my favorite events to coordinate was our
                    partnership event with United Airlines! It inspired me to
                    learn more about their tech-driven innovation and
                    inclusive workplace.
                  </p>
                </div>
              </li>
 

              

              
            </ul>
          </section>
        </Element>

        {/* Skills */}
        <Element name="skills">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              Skills
            </h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>
              Analytics and Modeling: Python, SQL, R, Excel, RStudio, Tableau
              </li>
              <li>
                Programming and Dev: Java, HTML, CSS, JavaScript, React, XML
              </li>
              <li>
                Cloud & IT Tools: AWS, Azure DevOps, Docker, GitHub,
                VirtualBox, Linux
              </li>
              <li>
                Business & Productivity Tools: JIRA, Confluence, Cherwell, Figma
              </li>
              <li>
               Cyber Security Tools: Wireshark, Nmap, Kali Linux, Shell Scripts
              </li>
              <li>
                Certifications: ISC2 Certified in Cybersecurity (In Progress), Google Cybersecurity, Google Analytics Professional Certificate, CodePath Cyber 101
              </li>
            </ul>
          </section>
        </Element>

        {/* Education */}
        <Element name="education">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              Education
            </h2>

            <p>
              <strong>New York University – Tandon School of Engineering</strong>
              <br />
              Master's in Cybersecurity (Expected 2028)
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>
                Currently enrolled in the Cyber Fellows program focused on
                network defense, incident response, and applied cryptography
              </li>
            </ul>

            <p className="mt-6">
              <strong>Illinois Institute of Technology</strong>
              <br />
              Bachelor of Science in Information Technology & Management
              (2025)
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Dean's List: Fall 2020, Spring 2024, Fall 2024, Spring 2025</li>
              <li>
                Recipient of Leaders in Science & Tech, Heald, and STEM+
                Scholarships
              </li>
              <li>
                Relevant coursework: Object-Oriented Programming, Data
                Networks, Cybersecurity Technologies, Project Management, and
                Front-End Web Development
              </li>

            </ul>
          </section>
        </Element>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-sm text-center text-gray-600">
        <p>
          Contact me at{" "}
          <a
            href="mailto:genesisgaytan01@gmail.com"
            className="text-[#005DAA] hover:underline"
          >
            genesisgaytan01@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}