import React, { useState } from "react";
import { Element } from "react-scroll";
import headshot from "../assets/HeadShot.png";
import Carousel from "./Carousel";
import unitedImage from "../assets/unitedAirlines.png";
import scrapBooth from "../assets/scrapBooth1.png";

export default function Portfolio() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6 font-outfit">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10 max-w-5xl mx-auto text-center">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src={headshot}
            alt="Genesis Gaytan"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Right: Text & Buttons */}
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-gray-600">Hello, I'm</p>
          <h1 className="text-4xl font-bold text-[#005DAA]">Genesis Gaytan</h1>
          <p className="text-lg mt-1">IIT | RTC | WiCys</p>

          {/* LinkedIn Icon */}
          <div className="mt-4 flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/genesis-gaytan-ba330b164/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:opacity-80 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#005DAA"
                className="hover:scale-110 transition-transform"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
              </svg>
            </a>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <button
              onClick={() => setShowResume(true)}
              className="inline-block px-6 py-2 bg-[#005DAA] text-white rounded-full hover:bg-[#004C8C] transition"
              type="button"
            >
              View Resume
            </button>
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
      <main className="max-w-4xl mx-auto space-y-20 mt-16">
        {/* About Me */}
        <Element name="about">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              About Me
            </h2>
            <p>
              I am an Information Technology and Management graduate from
              Illinois Tech with a passion for technology, travel, and community
              involvement. I was born and raised in Chicago! Experienced in
              programming, cybersecurity, and collaborative projects, I love
              learning and am a quick learner who picks up new skills easily. I
              thrive in collaborative environments and am currently pursuing
              Google and Microsoft cybersecurity certifications. I’m actively
              seeking a role in cybersecurity or data analytics where I can
              apply my technical skills and passion for protecting data and
              uncovering valuable insights. Outside of technology, I enjoy
              traveling and immersing myself in new cultures, which I believe
              broadens my worldview. I am also a violinist and an active member
              of my church community, where I find balance and purpose through
              music and service.
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
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              Projects & Experience
            </h2>
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col sm:flex-row-reverse items-center justify-between gap-6">
                <img
                  src={unitedImage}
                  alt="United Airlines Logo"
                  className="w-60 h-60 object-contain rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="font-bold text-lg">
                    IIT Association for Computing Machinery Women – Board Leader
                  </h3>
                  <p>
                    Ran social media accounts and coordinated events. As someone
                    passionate about both technology and travel, one of my
                    favorite events to coordinate was our partnership event with
                    United Airlines! It inspired me to learn more about their
                    tech-driven innovation and inclusive workplace.
                  </p>
                </div>
              </li>

              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition flex flex-col sm:flex-row-reverse items-center justify-between gap-6">
                <img
                  src={scrapBooth}
                  alt="ScrapBooth Logo"
                  className="w-60 h-60 object-contain rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="font-bold text-lg">Project - ScrapBooth</h3>
                  <p>
                    Inspired by my passion for traveling, I conceptualized
                    ScrapBooth, a 3-tier web application designed to help users
                    organize and share their travel memories. Served as the
                    first UI/UX Designer and IT Security lead on this school
                    project, designing the user interface and experience,
                    collaborating with developers to implement and test the
                    design. Built the Vault server for secrets management to
                    ensure secure deployment and data protection. Actively
                    participated in sprint planning, task assignment, and
                    utilized project management tools to keep the team
                    coordinated and productive. Gained hands-on experience in
                    UI/UX design, web application security, and Agile team
                    collaboration in an academic environment.
                  </p>
                </div>
              </li>

              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">
                  Cyber 101 Tech Fellow – CodePath
                </h3>
                <p>
                  Supported launch of remote cybersecurity courses nationwide,
                  reinforcing incident response and threat awareness standards.
                </p>
              </li>

              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">
                  Order Management System Intern – Ulta Beauty
                </h3>
                <p>
                  Enhanced front-end and back-end functionality of IBM Sterling
                  OMS, collaborated using Confluence, JIRA, and Cherwell to
                  maintain data integrity.
                </p>
              </li>

              <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <h3 className="font-bold text-lg">
                  Assistant Teacher – Beehive Day Care
                </h3>
                <p>
                  Maintained safe, educational environment and communicated
                  student progress with parents and staff.
                </p>
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
            <ul className="list-disc list-inside space-y-1">
              <li>Cybersecurity tools: Wireshark, Kali Linux, Nmap</li>
              <li>Programming languages: Python, Java, R, SQL, JavaScript</li>
              <li>Front-End: React, HTML, CSS, XML</li>
              <li>
                Project & IT Tools: Jira, Confluence, GitHub, Docker, Azure
                DevOps
              </li>
              <li>
                Soft skills: Leadership, communication, problem solving,
                bilingual in English & Spanish
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
              Bachelor of Science in Information Technology & Management,
              Illinois Institute of Technology
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Dean's List Fall 2020, Spring 2024, Fall 2024, Spring 2025
              </li>
              <li>
                Leaders in Science & Tech Scholarship, Heald Scholarship, Stem+
                Scholarship Recipient
              </li>
              <li>
                Cybersecurity training: CodePath Pathway Scholar, pursuing
                Google Cybersecurity and Microsoft Cybersecurity Analyst
                certifications
              </li>
              <li>
                Additional coursework: OOP, Data Networks, Cybersecurity
                Technologies, Project Management, Front-End Web Development
              </li>
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
          </a>
        </p>
      </footer>
    </div>
  );
}
