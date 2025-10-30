import React, { useState } from "react";
import { Element } from "react-scroll";
import headshot from "../assets/HeadShot.png";
import Carousel from "./Carousel";
import unitedImage from "../assets/unitedAirlines.png";
import scrapBooth from "../assets/scrapBooth1.png";

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
              href="https://www.linkedin.com/in/genesis-gaytan-ba330b164/"
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
            <p>
            Hi, I’m Genesis, a cybersecurity graduate student at New York University’s Tandon School of Engineering, where I’m part of the Cyber Fellows program focused on network defense, incident response, and applied cryptography.

            I recently earned my B.S. in Information Technology and Management from Illinois Tech, where I gained hands-on experience in programming, cybersecurity, and data analytics. I’m also certified as a Microsoft Cybersecurity Analyst and a Google Cybersecurity Professional.

            I’m passionate about strengthening digital security and using analytics to uncover meaningful insights. I thrive in collaborative, growth-oriented environments and am eager to apply my technical expertise in cybersecurity and data analytics roles that make an impact.

            Outside of tech, I’m a violinist and an active member of my church community, where I find balance and purpose through music and service.
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
              <li className="flex flex-col items-center justify-between gap-6 p-4 transition bg-white shadow rounded-xl hover:shadow-md sm:flex-row-reverse">
                <img
                  src={unitedImage}
                  alt="United Airlines Logo"
                  className="object-contain w-60 h-60 rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold">
                    IIT Association for Computing Machinery Women – Board Leader
                  </h3>
                  <p>
                    Ran the club's social media accounts and coordinated events. As someone
                    passionate about both technology and travel, one of my
                    favorite events to coordinate was our partnership event with
                    United Airlines! It inspired me to learn more about their
                    tech-driven innovation and inclusive workplace.
                  </p>
                </div>
              </li>

              <li className="flex flex-col items-center justify-between gap-6 p-4 transition bg-white shadow rounded-xl hover:shadow-md sm:flex-row-reverse">
                <img
                  src={scrapBooth}
                  alt="ScrapBooth Logo"
                  className="object-contain w-60 h-60 rounded-xl"
                  style={{ border: "none", boxShadow: "none" }}
                />
                <div className="text-left">
                  <h3 className="text-lg font-bold">Project - ScrapBooth</h3>
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

              <li className="p-4 transition bg-white shadow rounded-xl hover:shadow-md">
                <h3 className="text-lg font-bold">
                  Cyber 101 Tech Fellow – CodePath
                </h3>
                <p>
                Trained and supported 30+ students in foundational cybersecurity concepts, acting as a teaching assistant
Guided students through technical offering personalized feedback and strategies to help them succeed 
Led small group sessions and reinforced key topics including incident response, threat awareness, and data security

                </p>
              </li>

              <li className="p-4 transition bg-white shadow rounded-xl hover:shadow-md">
                <h3 className="text-lg font-bold">
                  Order Management System Intern – Ulta Beauty
                </h3>
                <p>
                Contributed to the Order Management System (OMS) — the platform that fulfills customer orders across channels including Buy Online Pick Up In Store (BOPIS), Same Day Delivery (SDD), and Ship to Store.
Improved store associate workflow by consolidating BOPIS and SDD orders into a single action button, using HTML and XML updates to streamline order processing and enhance system usability.
Utilized API Tester to create and validate XML order requests, ensuring server responses aligned with expected order outcomes.
Debugged order release issues with Java, XML, and DB Query, analyzing backend tables to resolve discrepancies that caused failed or delayed orders.
Participated in daily Agile standups, providing progress updates on tickets and collaborating with cross-functional developers.

                </p>
              </li>

              <li className="p-4 transition bg-white shadow rounded-xl hover:shadow-md">
                <h3 className="text-lg font-bold">
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
            <ul className="space-y-1 list-disc list-inside">
              <li>Analytics and Modeling: Python, SQL, R, Excel, R- Studio, Power BI</li>
              <li>Programing and Dev: Java, HTML, CSS, JavaScript, React, XML</li>
              <li>Cloud & IT Tools: AWS, Azure DevOps, Docker, GitHub, VirtualBox, Linux</li>
              <li> Business & Productivity Tools: JIRA, Confluence, Cherwell, Figma</li>
              <li>Cyber Security Tools: Wireshark, Nmap, Kali Linux, Shell Scripts</li>
              <li>Certifications: Microsoft Cybersecurity Analyst, Google Cybersecurity, CodePath Cyber 101</li>
              
            </ul>
          </section>
        </Element>

        {/* Education */}
        {/* Education */}
        <Element name="education">
          <section>
            <h2 className="text-2xl font-semibold text-[#005DAA] mb-4">
              Education
            </h2>
            
            <p>
              <strong>New York University – Tandon School of Engineering</strong><br />
              Master’s in Cybersecurity (Expected 2028)
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Currently enrolled in the Cyber Fellows program focused on network defense, incident response, and applied cryptography</li>
            </ul>

            <p className="mt-6">
              <strong>Illinois Institute of Technology</strong><br />
              Bachelor of Science in Information Technology & Management (2025)
            </p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Dean’s List: Fall 2020, Spring 2024, Fall 2024, Spring 2025</li>
              <li>Recipient of Leaders in Science & Tech, Heald, and STEM+ Scholarships</li>
              <li>Relevant coursework: Object-Oriented Programming, Data Networks, Cybersecurity Technologies, Project Management, and Front-End Web Development</li>
              <li>Microsoft Cybersecurity Analyst Certification</li>
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
