import "animate.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects" className="pb-11 pt-20">
      <h1 className="text-center text-[#ccd6f6] text-4xl font-bold mb-12">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className=" gap-2 p-4  rounded-xl bg-[#00000067] "
          >
            <img src="https://i.ibb.co/vBbpqRm/p1.png" alt="" className=" object-cover " />
            <div className="flex flex-col gap-1">
              <h2 className="text-[#ccd6f6] text-2xl font-bold">
               
                Digital Tech
              </h2>
              <div>
                <Link
                  to="https://65c9251bcd4bfb58dd306f73--joyful-melba-507ba4.netlify.app/"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  Live Site
                </Link>
                <span className="text-[#ccd6f6] text-xl"> | </span>
                <Link
                  to="https://github.com/EmonHossen10/a10-digital-tech-client?tab=readme-ov-file"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-[#ccd6f6] text-xl">
                React | Express.js | MongoDB  
              </p>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className=" gap-2 p-4  rounded-xl bg-[#00000067] "
          >
            <img src="https://i.ibb.co/rdBV1pL/p2.png" alt="" className=" object-cover" />
            <div className="flex flex-col gap-1">
              <h2 className="text-[#ccd6f6] text-2xl font-bold">Service Master</h2>
              <div>
                <Link
                  to="https://655bb2950553e718f37aaa29--earnest-macaron-5b91b8.netlify.app/"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  Live Site
                </Link>
                <span className="text-[#ccd6f6] text-xl"> | </span>
                <Link
                  to="https://github.com/EmonHossen10/a11-service-sharing-client"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-[#ccd6f6] text-xl">
                React | Express.js | MongoDB
              </p>
            </div>
          </div>
        </Tilt>

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className=" gap-2 p-4  rounded-xl bg-[#00000067] "
          >
            <img src="https://i.ibb.co/D863ftD/p3.png" alt="" className=" object-cover" />
            <div className="flex flex-col gap-1">
              <h2 className="text-[#ccd6f6] text-2xl font-bold">Dream Job</h2>
              <div>
                <Link
                  to="https://fast-news-80a2e.web.app/"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  Live Site
                </Link>
                <span className="text-[#ccd6f6] text-xl"> | </span>
                <Link
                  to="https://github.com/EmonHossen10/a-12-fast-news"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-[#ccd6f6] text-xl">React | Express | Node | MongoDb | Stripe</p>
            </div>
          </div>
        </Tilt>
        {/* <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className=" gap-2 p-4  rounded-xl bg-[#00000067] "
          >
            <img src="/zet.png" alt="" className=" object-cover" />
            <div className="flex flex-col gap-1">
              <h2 className="text-[#ccd6f6] text-2xl font-bold">ZET</h2>
              <div>
                <Link
                  to="https://zet-ten.vercel.app/"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  Live Site
                </Link>
                <span className="text-[#ccd6f6] text-xl"> | </span>
                <Link
                  to="https://github.com/mahadi61/zet"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-[#ccd6f6] text-xl">NextJs | Tailwind</p>
            </div>
          </div>
        </Tilt>
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className=" gap-2 p-4  rounded-xl bg-[#00000067] "
          >
            <img src="/cooking-master.png" alt="" className=" object-cover" />
            <div className="flex flex-col gap-1">
              <h2 className="text-[#ccd6f6] text-2xl font-bold">
                Cooking Master
              </h2>
              <div>
                <Link
                  to="https://cooking-master-31ac0.web.app/"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  Live Site
                </Link>
                <span className="text-[#ccd6f6] text-xl"> | </span>
                <Link
                  to="https://github.com/mahadi61/cooking-master"
                  target="_blank"
                  className="text-[#ccd6f6] text-xl underline"
                >
                  GitHub
                </Link>
              </div>
              <p className="text-[#ccd6f6] text-xl">
                React | Bootstrap | Authentication
              </p>
            </div>
          </div>
        </Tilt> */}
      </div>
    </div>
  );
};

export default Projects;
