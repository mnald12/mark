import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const ABOUT = "ABOUT";
const WORKS = "WORKS";
const CONTACTS = "CONTACTS";

const Goto = ({ section }) => {
  const scrollTo = (id, block) => {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: block, inline: "nearest" });
  };

  switch (section) {
    case ABOUT:
      return (
        <div className="gotos">
          <button onClick={() => scrollTo("works", "start")}>
            <AiOutlineArrowDown />
          </button>
        </div>
      );
    case WORKS:
      return (
        <div className="gotos">
          <button onClick={() => scrollTo("about", "start")}>
            <AiOutlineArrowUp />
          </button>
          <button onClick={() => scrollTo("contacts", "start")}>
            <AiOutlineArrowDown />
          </button>
        </div>
      );
    case CONTACTS:
      return (
        <div className="gotos">
          <button onClick={() => scrollTo("works", "start")}>
            <AiOutlineArrowUp />
          </button>
        </div>
      );
    default:
      return (
        <div className="gotos">
          <button>
            <AiOutlineArrowDown />
          </button>
        </div>
      );
  }
};

export default Goto;
