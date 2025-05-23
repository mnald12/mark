import "../styles/prj.css";

const works = [
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
    workName: "Light Plumbing",
    type: "Personal Project",
    img: "lightplumbing.png",
    link: "https://lightplumbing.netlify.app/",
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
    type: "Email into chat app with video and audio call | Paid Training",
    img: "mailenger.png",
    link: null,
    description: "",
  },
  {
    workName: "(CEMS) Covid-19 Expense Management System",
    type: "Web Based Management System | Capstone",
    img: "cems.png",
    link: null,
    description: "",
  },
  {
    workName: "(BMS) Barangay Management System",
    type: "Web Based Management System | Capstone",
    img: "bms.png",
    link: null,
    description: "",
  },
];

const Prj = () => {
  return (
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          {works.map((w) => (
            <div class="project-card">
              <img src={require(`../img/proj/${w.img}`)} alt="" />
              <div class="card-overlay">
                <h3>{w.workName}</h3>
                <p>{w.type}</p>
                <a href="https://codepen.io/" class="btn">
                  Visit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prj;
