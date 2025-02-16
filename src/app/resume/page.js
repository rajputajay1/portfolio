import Navbar from "@/components/navbar";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { MovingBorder } from "@/components/ui/moving-border";
import Image from "next/image";

const Page = () => {
  const skills = [
    {
      iconSrc: "/assets/images/icon-design.svg",
      iconAlt: "design icon",
      title: "Frontend",
      text: "Building dynamic and responsive UIs using modern frameworks.",
      skills: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Redux",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      iconSrc: "/assets/images/icon-dev.svg",
      iconAlt: "Web development icon",
      title: "Backend",
      text: "Developing scalable and efficient server-side applications.",
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"],
    },
    {
      iconSrc: "/assets/images/icon-app.svg",
      iconAlt: "mobile app icon",
      title: "Mobile Development",
      text: "Creating high-performance mobile apps for iOS and Android.",
      skills: ["React Native", "Flutter"],
    },
    {
      iconSrc: "/assets/images/icon-dev.svg",
      iconAlt: "API & Cloud Services icon",
      title: "API & Cloud Services",
      text: "Designing real-time APIs and scalable cloud solutions.",
      skills: ["REST APIs", "AWS", "Firebase", "Docker"],
    },
    {
      iconSrc: "/assets/s/icon-dev.svg",
      iconAlt: "tools icon",
      title: "Other Tools",
      text: "Proficient in development tools and workflow automation.",
      skills: ["Git", "Netlify", "Postman", "Hostinger"],
    },
  ];

  return (
    <>
      <Navbar page="Resume" />
      <article className="resume active" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaGraduationCap />
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Surendra Group of Institutions
              </h4>

              <span>July 2021 — July 2025</span>

              <p className="timeline-text">
                B.Tech Computer Science <br />
                CGPA : 7.73
              </p>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaCode />
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Marketing Amplify Lab Agency
              </h4>

              <span>May 2024 — Present</span>

              <li className="timeline-text">
                1. Led the front-end development of Marketing Amplify, the
                company's flagship product, using React.js
              </li>
              <li className="timeline-text">
                2. Designed and implemented modular & reusable components,
                improving code maintainability & scalability.
              </li>
              <li className="timeline-text">
                3. Enhanced performance, security, and user experience,
                resulting in faster load times and better SEO optimization.
              </li>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">Unity Books</h4>

              <span>December 2023 — May 2024</span>

              <p className="timeline-text">
                1. Developed and maintained Unity Books web platform using
                React.js, Node.js, and MySQL, ensuring a scalable & efficient
                architecture.
                <br />
                2. Implemented push notifications, increasing user engagement by
                X% .
                <br />
                3. Ensured system security & data protection by implementing
                best practices in authentication & encryption.
                <br />
                4. Collaborated with cross-functional teams to align product
                development with business needs.
              </p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                PiZone Infotech Solution
              </h4>

              <span>December 2022 — June 2023</span>

              <p className="timeline-text">
                1.Developed real-world Flutter-based mobile applications,
                improving app performance & user experience.
                <br />
                2. Integrated RESTful APIs & third-party services, ensuring
                smooth frontend-backend communication.
                <br />
                3. Worked closely with design & backend teams to deliver
                high-quality, fully functional apps.
              </p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            {/* <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Graphic design</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </li> */}

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web development</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Web Design</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">Flutter</h5>
                <data value="50">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: " 90%" }}
                ></div>
              </div>
            </li>
          </ul>

          <ul className="service-list pt-10">
            {skills.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "bg-transparent relative text-xl p-[1px] overflow-hidden"
                )}
              >
                <div
                  className="absolute inset-0"
                  style={{ borderRadius: "10px" }}
                >
                  <MovingBorder duration={6000} rx="30%" ry="30%">
                    <div
                      className={cn(
                        "h-10 w-20 opacity-[0.8] bg-[radial-gradient(var(--yellow-500)_40%,transparent_60%)]"
                      )}
                    />
                  </MovingBorder>
                </div>
                <li
                  className={cn(
                    "relative bg-gray-600/[0.1] backdrop-blur-xl text-white flex items-start justify-start gap-4 w-full h-full text-sm antialiased p-5"
                  )}
                  style={{ borderRadius: "10px" }}
                >
                  <div className="service-icon-box">
                    <Image
                      src={service.iconSrc}
                      alt={service.iconAlt}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.title}</h4>
                    <p className="service-item-text">{service.text}</p>
                    <ul className="grid grid-cols-2 mt-2 list-none p-0 max-md:grid-cols-1">
                      {service.skills?.map((skill, index) => (
                        <li key={index} className="service-item-text text-left">
                          {index + 1}. {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default Page;
