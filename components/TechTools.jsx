import {
  FaCss3,
  FaJs,
  FaLeaf,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

function tools(tool, index, cls) {
  let component = null;
  const size = cls.trim() === "text-sm" ? "sm" : "md";
  const baseClasses =
    "border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1 flex justify-center items-center";

  switch (tool) {
    case "react":
      component = (
        <div className={baseClasses} key={index}>
          <FaReact className="pr-1" />
          {/* <i className="fab fa-react pr-1"></i> */}
          <span className="">React</span>
        </div>
      );
      break;
    case "nodejs":
      component = (
        <div className={baseClasses} key={index}>
          <FaNodeJs className="pr-1" />
          {/* <i className="fab fa-node-js pr-1"></i> */}
          <span>NodeJs</span>
        </div>
      );
      break;
    case "js":
      component = (
        <div className={baseClasses} key={index}>
          <FaJs className="pr-1" />
          {/* <i className="fab fa-js pr-2"></i> */}
          <span>JavaScript</span>
        </div>
      );
      break;
    case "css3":
      component = (
        <div className={baseClasses} key={index}>
          <FaCss3 className="pr-1" />
          {/* <i className="fab fa-css3 pr-1"></i> */}
          <span>CSS3</span>
        </div>
      );
      break;
    case "mongodb":
      component = (
        <div className={baseClasses} key={index}>
          <FaLeaf className="pr-1" />
          Mongo Db
        </div>
      );
      break;
    case "sqlserver":
      component = (
        <div className={baseClasses} key={index}>
          Sql Server
        </div>
      );
      break;
    case ".net":
      component = (
        <div className={baseClasses} key={index}>
          .NET
        </div>
      );
      break;
    case "tailwind":
      component = (
        <div className={baseClasses} key={index}>
          Tailwind
        </div>
      );
      break;
    case "bulma":
      component = (
        <div className={baseClasses} key={index}>
          Bulma
        </div>
      );
      break;
    case "firebase":
      component = (
        <div className={baseClasses} key={index}>
          FireBase
        </div>
      );
      break;
    case "c++":
      component = (
        <div className={baseClasses} key={index}>
          C++
        </div>
      );
      break;
    case "c#":
      component = (
        <div className={baseClasses} key={index}>
          C#
        </div>
      );
      break;
    case "sql":
      component = (
        <div className={baseClasses} key={index}>
          SQL
        </div>
      );
      break;
    default:
      break;
  }
  return component;
}

function TechTools({ toolsArray, containerCls }) {
  return (
    <div className={"flex flex-wrap -ml-2 " + containerCls}>
      {toolsArray.map((tool, index) => {
        return tools(tool, index, containerCls);
      })}
    </div>
  );
}

export default TechTools;
