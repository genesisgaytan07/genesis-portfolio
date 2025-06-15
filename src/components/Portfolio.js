import React, { useState } from "react";
import { Element } from "react-scroll";
import headshot from "../assets/HeadShot.png";
import Carousel from "./Carousel";

export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-outfit">
      {/* Headshot */}
      <img
        src={headshot}
        alt="Genesis Gaytan"
        className="w-48 h-48 rounded-full object-cover mx-auto shadow-lg"
      />

      {/* Header */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-[#005DAA]">Genesis Gaytan</h1>
        <p className="text-lg mt-2">Cybersecurity | ITM | Traveler | Tech Enthusiast</p>
        <button
          onClick={() => setShowResume(true)}
          className="inline-block mt-4 px-6 py-2 bg-[#005DAA] text-white rounded-full hover:bg-[#004C8C] transition"
          type="button"
        >
          View Resume
        </button>
      </header>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-5xl w-full h-[85vh] relative shadow-lg">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-3 text-gray-700 text-2xl font-bold hover:text-gray-900 transition"
              aria-label="Close resume modal"
              type="button"
            >
              &times;
            </button>
            <iframe
                src={`${process.env.PUBLIC_URL}/Gaytan_Genesis_Resume2025.pdf`}
                title="Genesis Gaytan Resume"
                 className="w-full h-full rounded-md"
            />

          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-20">
        {/* About Me */}
        <Element name="about">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">About Me</h2>
            <p>
              Information Technology and Management graduate from Illinois Tech with a passion for technology, travel, and community involvement.
              Experienced with programming, cybersecurity, and collaborative projects.
              Currently pursuing Google and Microsoft cybersecurity certifications.
            </p>
          </section>
        </Element>

        {/* Carousel Section */}
        <section>
          <Carousel />
        </section>

        {/* Experience */}
        <Element name="experience">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">Projects & Experience</h2>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">Cyber 101 Tech Fellow – CodePath</h3>
                <p>
                  Supported launch of remote cybersecurity courses nationwide, reinforcing incident response and threat awareness standards.
                </p>
              </li>
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">Order Management System Intern – Ulta Beauty</h3>
                <p>
                  Enhanced front-end and back-end functionality of IBM Sterling OMS, collaborated using Confluence, JIRA, and Cherwell to maintain data integrity.
                </p>
              </li>
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">Assistant Teacher – Beehive Day Care</h3>
                <p>
                  Maintained safe, educational environment and communicated student progress with parents and staff.
                </p>
              </li>
            </ul>
          </section>
        </Element>

        {/* Skills */}
        <Element name="skills">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Cybersecurity tools: Wireshark, Kali Linux, VeraCrypt, Nmap</li>
              <li>Programming languages: Python, Java, R, SQL, Swift, JavaScript</li>
              <li>Front-End: React, HTML, CSS, XML</li>
              <li>Project & IT Tools: Jira, Confluence, ServiceNow, GitHub, Docker, Azure DevOps</li>
              <li>Soft skills: Leadership, communication, problem solving, bilingual in English & Spanish</li>
            </ul>
          </section>
        </Element>

        {/* Education */}
        <Element name="education">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">Education</h2>
            <p>
              Bachelor of Science in Information Technology & Management, Illinois Institute of Technology (Expected May 2025) — GPA: 3.18
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Dean's List Fall 2020, Spring 2024, Fall 2024, Spring 2025</li>
              <li>Leaders in Science & Tech Scholarship, Heald Scholarship, Stem+ Scholarship Recipient</li>
              <li>Cybersecurity training: CodePath Pathway Scholar, pursuing Google Cybersecurity and Microsoft Cybersecurity Analyst certifications</li>
              <li>Additional coursework: OOP, Data Networks, Cybersecurity Technologies, Project Management, Front-End Web Development</li>
            </ul>
          </section>
        </Element>
      </main>

      {/* Footer */}
      <footer className="text-center mt-20 text-sm text-gray-600">
        <p>
          Contact me at{" "}
          <a
            href="mailto:genesisgaytan01@gmail.com"
            className="text-[#005DAA] hover:underline"
          >
            genesisgaytan01@gmail.com
          </a>{" "}
          |{" "}
          <a
            className="ml-1 text-[#005DAA] hover:underline"
            href="https://www.linkedin.com/in/genesis-gaytan-ba330b164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
}
