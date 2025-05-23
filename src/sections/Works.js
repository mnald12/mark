import { useContext } from "react";
import "../styles/works.css";
import { Data } from "../Page";
import Goto from "../components/Goto";
const works = [
  {
    workName: "PD HR Attendance MS",
    type: "Web based Management System",
    img: "pdhrams.png",
    link: "https://jgcrystalking.net/",
    description: "",
  },
  {
    workName: "BGI Electrical Store MS ",
    type: "Web based Management System",
    img: "bgi.png",
    description: "",
  },
  {
    workName: "JG Crystal King",
    type: "Company Website",
    img: "jgcrystalking.png",
    link: "https://jgcrystalking.net/",
    description: "",
  },
  {
    workName: "TANG ELEVEN",
    type: "Web Based Store Management System",
    img: "tangeleven.png",
    link: null,
    description: "",
  },
  {
    workName: "AMATEL",
    type: "Website and Managemenet System | Capstone",
    img: "amatel.png",
    link: null,
    description: "",
  },
  {
    workName: "TESDA",
    type: "Website and Managemenet System | Capstone",
    img: "tesda.png",
    link: null,
    description: "",
  },
  {
    workName: "Grandomizer",
    type: "Personal Project | CSS Tool",
    img: "grandomizer.png",
    link: "https://grandomizer.netlify.app/",
    description: "",
  },
  {
    workName: "Mailenger",
    type: "Email into chat app with video and audio call",
    img: "mailenger.png",
    link: null,
    description: "",
  },
  {
    workName: "(BMS) Barangay MS",
    type: "Web Based Management System | Capstone",
    img: "bms.png",
    link: null,
    description: "",
  },
];

const Works = () => {
  const { ref2 } = useContext(Data);

  return (
    <div ref={ref2} id="works">
      <div className="headline">
        <div className="headlines">
          <h1>Explore My Works</h1>
          <Goto section={"WORKS"} />
        </div>
        <p>
          Backed by an extensive portfolio of my previous projects, I have a
          proven track record of successfully delivering outstanding results.
          Each of these works reflects my dedication to excellence, and I am
          confident in my ability to provide you with the same level of quality
          and commitment for your upcoming project.
        </p>
      </div>

      <div className="works">
        {works.map((work, id) => (
          <div className="work" key={id}>
            {work.type === "Codepen" ? (
              <video autoPlay muted loop>
                <source
                  src={require(`../img/proj/${work.vid}`)}
                  type="video/mp4"
                />
              </video>
            ) : (
              <img src={require(`../img/proj/${work.img}`)} alt="" />
            )}
            <div className="content">
              <h3>{work.workName}</h3>
              <small>{work.type}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
