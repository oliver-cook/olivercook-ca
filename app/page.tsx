// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Oliver Cook</h1>
      <h2>Software Developer</h2>
      <p>
          Senior full-stack and application developer with a drive to create accessible, equitable, and community-based software — from design and development through to maintenance and support.
      </p>
      
      <div >
          <h3>
              Software Developer, Holland Bloorview Kids Rehabilitation Hospital — 2023-2024 (1 year)
          </h3>
          <p>
              Worked as part of the Possibility Engineering and Research Lab (PEARL) at the Bloorview Research Institute to create “Bootle Blast”, a video game to aid clinicians in delivering therapeutic activities to children with movement disorders.
          </p>
          <ul className="list-inside list-disc">
              <li>Implemented game mechanics using mixed reality hardware with C#, Unity, and Orbecc hardware. By designing from an accessibility-first perspective I enabled children with a wide range of physical abilities to engage in movement therapies in a fun and intuitive way without having to go into the clinic for assessment.</li>
          </ul>
      </div>

      <div >
          <h3>
              Senior & Lead Software Developer, McMaster University — 2020-2023 (3 years)
          </h3>
          <p>
              Grew and then led McMaster University&aposs dedicated research software development (RSD) team as a developer, mentor, and project lead.
          </p>
          <ul className="list-inside list-disc">
            <li>Engaged in the full lifecycle of McMaster&aposs laboratory information management system known as MacLIMS. By deploying this system to our partnering research institutes I streamlined their day-to-day operations including: billing, equipment scheduling, and user management.</li>
            <li>Developed and maintained backend and front end features of MacLIMS using Yii2 (a PHP Model-View-Controller framework), Javascript ES6+, PostgreSQL, responsive HTML and CSS.</li>
            <li>Configured RESTful APIs and web services for integrating with McMaster&aposs centralized IT and business systems such as financial services for direct billing.</li>
            <li>Hired, managed, and mentored junior developers on software development best practices and established DevOps processes. I helped boost productivity by equipping the team with core tools for: version control, issue management, and project management.</li>
            <li>Administered a production RedHat Enterprise Linux server and managed web traffic scaling, security, database configuration, package updates, and content deployment.</li>
            <li>Completed regular change and release management using Git in tiered production and development environments, including creating testing plans and change documentation.</li>
            <li>Collaborated with stakeholders to communicate issues, project frameworks, milestones, timelines, deliverables, and guided walkthroughs.</li>
            <li>Created data exports for analysis and reporting by executive members of the university and funding agencies on usage and user metrics using SQL.</li>
            <li>Provided level 3 end-user support through in-person engagement and Jira issue tracking.</li>
          </ul>
      </div>


      <div >
          <h3>
              Software Developer, McMaster University — 2019-2020 (1 year)
          </h3>
          <p>
              As part of the Department of Research and High Performance Computing Support, I helped establish McMaster University&aposs first centralized team designed explicitly to support McMaster&aposs research community with professional software development services. 
          </p>
          <ul className="list-inside list-disc">
                  <li>
                      Managed several concurrent software development projects by taking them from proposal to delivery using a wide array of languages, frameworks, and libraries to match diverse research applications in social sciences, psychology, engineering, and health sciences.
                  </li>
                  <li>
                      Developed web applications using LAMP (Linux, Apache, MySQL, and Php) and MERN (MongoDB, Express, React, and Node.js) stacks, mobile applications using React, and desktop applications using R, Python, and SKLearn for machine learning.
                  </li>
                  <li>
                      Transformed our clients research ideas into software realities through requirements, business, and workflow analysis. Helped train researchers in software development best practices and guided them in developing their own software.
                  </li>
                  <li>
                      Collaborated with our partners at the university towards understanding how to best serve the university&aposs growing software needs by developing KPI, creating documentation, establishing standards, and establishing a community of practice that can help inform future growth.
                  </li>
              </ul>
      </div>


      <div>
          <h3>
              Graduate Research Assistant, University of Guelph — 2015-2018 (3 years)
          </h3>
          <p>
              Hired by the Indigenous Health Adaptation to Climate Change (IHACC) program to co-design and develop ENuk, a mobile and web tool for participatory data collection to assist in health, well-being, and climate change adaptation, co-created with an Inuit community in northern Labrador. 
          </p>
          <ul className="list-inside list-disc">
                  <li>
                      Conducted participatory community-based design ideation, wireframing, and UX workshops with community partners to build software, share knowledge, and engage in Indigenous data management.
                  </li>
                  <li>
                      Developed a participatory mapping tool using a MEAN stack and GIS technologies (ESRI ArcGIS, Mapbox, and a PostGIS Geospatial database)
                  </li>
              </ul>
      </div>

      <h2>Education</h2>
      <div >
          <h3>
              University of Guelph, Guelph, ON — Masters of Science
          </h3>
          <p>
              Completed a thesis-based program in computer science researching community-based participatory design practices. Studied the ways in which software is situated within the social, cultural, and environmental contexts it is used with a case study on designing software with Inuit for climate change adaptation and community monitoring of indigenous health indicators.
          </p>
      </div>

    </div>
  );
}
