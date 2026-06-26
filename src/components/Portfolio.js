import React, { useState } from "react";
import { Element } from "react-scroll";
import headshot from "../assets/HeadShot.png";
import Carousel from "./Carousel";
import unitedImage from "../assets/unitedAirlines.png";
import scrapBooth from "../assets/scrapBooth1.png";
import vayner from "../assets/vayner.PNG";
import ultalogo from "../assets/ultalogo.png";
import coopcap from "../assets/coopcap.png";

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
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">About Me</h2>
            <div className="space-y-4">
              <p>
                Hi, I'm Genesis, a cybersecurity graduate student at New York
                University's Tandon School of Engineering, where I'm part of
                the Cyber Fellows program focused on network defense,
                incident response, and applied cryptography. I earned my B.S.
                in Information Technology and Management from Illinois Tech,
                where I built a foundation in programming, cybersecurity, and
                data analytics.
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
            <ul className="space-y-3">
              <li className="flex flex-col items-start gap-4 p-4 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md sm:flex-row-reverse sm:items-center">
                <img
                  src={vayner}
                  alt="VaynerMedia"
                  className="flex-shrink-0 object-contain w-16 h-16 rounded-lg"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    VaynerMedia
                  </h3>
                  <p className="text-sm font-medium text-[#005DAA] mt-1 mb-2">
                    Resident, Data Analyst
                  </p>
                  <p className="text-sm text-gray-600">
                    Incoming 3-month data analytics residency supporting
                    advertising and media performance reporting and
                    analysis.
                  </p>
                </div>
              </li>

              <li className="flex flex-col items-start gap-4 p-4 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md sm:flex-row-reverse sm:items-center">
                <img
                  src={ultalogo}
                  alt="Ulta Beauty"
                  className="flex-shrink-0 object-contain w-16 h-16 rounded-lg"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    Ulta Beauty
                  </h3>
                  <p className="text-sm font-medium text-[#005DAA] mt-1 mb-2">
                    Order Management System Support Intern
                  </p>
                  <p className="text-sm text-gray-600">
                    Contributed to OMS supporting thousands of daily orders
                    across BOPIS, SDD, and Ship to Store. Consolidated
                    BOPIS and SDD orders into a single action button,
                    reducing processing time by ~30%. Debugged order
                    release issues using Java, XML, and DB Query.
                  </p>
                </div>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4 mt-12">
              Projects
            </h2>
            <ul className="space-y-3">
              <li className="flex flex-col items-start gap-4 p-4 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md sm:flex-row-reverse sm:items-center">
                <img
                  src={coopcap}
                  alt="COOP Capstone Project"
                  className="flex-shrink-0 object-contain w-24 h-24 rounded-lg"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    COOP Capstone Project
                  </h3>
                  <p className="text-sm font-medium text-[#005DAA] mt-1 mb-2">
                    Creative Analyst
                  </p>
                  <p className="mb-3 text-sm text-gray-600">
                    Marketing analysis for telecommunications client
                    StratusLink Communications, tracking CPA and CTR
                    across creative size, messaging, device, and location
                    to inform strategy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      MySQL Workbench
                    </span>
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Google Sheets
                    </span>
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Tableau
                    </span>
                  </div>
                </div>
              </li>

              <li className="flex flex-col items-start gap-4 p-4 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md sm:flex-row-reverse sm:items-center">
                <img
                  src={scrapBooth}
                  alt="ScrapBooth Logo"
                  className="flex-shrink-0 object-contain w-24 h-24 rounded-lg"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    ScrapBooth
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    A 3-tier web application concept for organizing and
                    sharing travel memories, inspired by my own love of
                    travel.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      UI/UX design
                    </span>
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Vault
                    </span>
                  </div>
                </div>
              </li>

              <li className="flex flex-col items-start gap-4 p-4 transition bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md sm:flex-row-reverse sm:items-center">
                <img
                  src={unitedImage}
                  alt="United Airlines Logo"
                  className="flex-shrink-0 object-contain w-24 h-24 rounded-lg"
                />
                <div className="flex-1 text-left">
                  <h3 className="text-base font-bold text-gray-900">
                    ACM-W – Illinois Tech
                  </h3>
                  <p className="text-sm font-medium text-[#005DAA] mt-1 mb-2">
                    Board Leader
                  </p>
                  <p className="mb-3 text-sm text-gray-600">
                    Led social media strategy and coordinated campus
                    events for the club, including a partnership event
                    with United Airlines that sparked my interest in the
                    airline's tech-driven, inclusive workplace culture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Social media strategy
                    </span>
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Event coordination
                    </span>
                  </div>
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

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Analytics & Modeling
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "SQL", "R", "Excel", "RStudio", "Tableau"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Programming & Dev
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Java", "HTML", "CSS", "JavaScript", "React", "XML"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Cloud & IT tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Azure DevOps",
                    "Docker",
                    "GitHub",
                    "VirtualBox",
                    "Linux",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Cybersecurity Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Wireshark", "Nmap", "Kali Linux", "Shell Scripts"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Business & Productivity
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JIRA", "Confluence", "Cherwell", "Figma"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="mb-2 text-sm font-semibold text-gray-700">
                  Certifications
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "ISC2 CC (in progress)",
                    "Google Cybersecurity",
                    "Google Analytics Pro",
                    "CodePath Cyber 101",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Element>

        {/* Education */}
        <Element name="education">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              Education
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 transition bg-white shadow rounded-xl hover:shadow-md">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-[#E6F1FB]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#005DAA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 3 2 8l10 5 10-5-10-5Z" />
                    <path d="M6 10.5V16c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    New York University – Tandon School of Engineering
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-gray-500">
                    Master's in Cybersecurity · Expected 2028
                  </p>
                  <p className="text-sm text-gray-600">
                    Currently enrolled in the Cyber Fellows program
                    focused on network defense, incident response, and
                    applied cryptography.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 transition bg-white shadow rounded-xl hover:shadow-md">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-[#E6F1FB]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#005DAA"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="9" r="5" />
                    <path d="M9 13.5 7 21l5-3 5 3-2-7.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900">
                    Illinois Institute of Technology
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-gray-500">
                    B.S. Information Technology & Management · 2025
                  </p>
                  <p className="mb-3 text-sm text-gray-600">
                    Relevant coursework: Object-Oriented Programming, Data
                    Networks, Cybersecurity Technologies, Project
                    Management, and Front-End Web Development
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Dean's List x4
                    </span>
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      Leaders in Science & Tech Scholar
                    </span>
                    <span className="text-xs font-medium text-[#0C447C] bg-[#E6F1FB] px-3 py-1 rounded-full">
                      STEM+ Scholar
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4 mt-12">
              Affiliations
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="text-sm font-bold text-gray-900">WiCyS</p>
                <p className="mt-1 text-xs text-gray-500">
                  Member, Google Cybersecurity Cohort & ISC2 Spring Camp
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="text-sm font-bold text-gray-900">CodePath</p>
                <p className="mt-1 text-xs text-gray-500">
                  Student, Member, & Tech Fellow
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="text-sm font-bold text-gray-900">
                  Rewriting the Code
                </p>
                <p className="mt-1 text-xs text-gray-500">Member</p>
              </div>
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="text-sm font-bold text-gray-900">
                  ACMW – Illinois Tech
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Social Media Manager & Board Member
                </p>
              </div>
              
              <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl">
                <p className="text-sm font-bold text-gray-900">COOP Careers</p>
                <p className="mt-1 text-xs text-gray-500">
               Fellow, Data Analysis
                </p>
              </div>
            </div>
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