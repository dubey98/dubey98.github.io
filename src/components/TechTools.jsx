import React from "react";
import firebaseLogo from "./../static/firebase.png";
import csharp from "../static/c-sharp-icon.png";
import cplusplus from "./../static/cplusplus.png";
import sql from "./../static/sql.png";

function tools(tool, index, cls) {
  let component = null;
  const size = cls.trim() === "text-sm" ? "sm" : "md";

  switch (tool) {
    case "react":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <i className="fab fa-react pr-1"></i>
          <span className="">React</span>
        </div>
      );
      break;
    case "nodejs":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <i className="fab fa-node-js pr-1"></i>
          <span>NodeJs</span>
        </div>
      );
      break;
    case "js":
      component = (
        <div
          className="border flex items-center border-custom-green border-opacity-50 hover:border-opacity-100 rounded-full px-3 m-1"
          key={index}
        >
          <i className="fab fa-js pr-2"></i>
          <span>JavaScript</span>
        </div>
      );
      break;
    case "css3":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <i className="fab fa-css3 pr-1"></i>
          <span>CSS3</span>
        </div>
      );
      break;
    case "mongodb":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          Mongo Db
        </div>
      );
      break;
    case "sqlserver":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          Sql Server
        </div>
      );
      break;
    case ".net":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          .NET
        </div>
      );
      break;
    case "tailwind":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          Tailwind
        </div>
      );
      break;
    case "bulma":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          Bulma
        </div>
      );
      break;
    case "firebase":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <div className={"flex justify-center items-center h-full w-full "}>
            <img
              className={
                "object-center object-cover mr-1 " +
                (size === "sm" ? "h-[14px] w-[14px]" : "h-[15px] w-[15px]")
              }
              src={firebaseLogo}
              alt="firebase logo"
            />
            FireBase
          </div>
        </div>
      );
      break;
    case "c++":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <div className={"flex justify-center items-center h-full w-full "}>
            <img
              className={
                "object-center object-cover mr-1  " +
                (size === "sm" ? "h-[14px] w-[14px]" : "h-[15px] w-[15px]")
              }
              src={cplusplus}
              alt="c plus plus logo"
            />
            C++
          </div>
        </div>
      );
      break;
    case "c#":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <div className={"flex justify-center items-center h-full w-full "}>
            <img
              className={
                "object-center object-cover " + size === "sm"
                  ? "h-[14px] w-[14px]"
                  : "h-[15px] w-[15px]"
              }
              src={csharp}
              alt="csharop logo"
            />
            <span className="ml-1">C#</span>
          </div>
        </div>
      );
      break;
    case "sql":
      component = (
        <div
          className="border border-custom-green border-opacity-50 hover:border-opacity-100 py-1 rounded-full px-3 m-1"
          key={index}
        >
          <div className={"flex justify-center items-center h-full w-full "}>
            <img
              className={
                "object-cover object-center mr-1  " +
                (size === "sm" ? "h-[14px] w-[14px]" : "h-[15px] w-[15px]")
              }
              src={sql}
              alt="sql logo"
            />
            SQL
          </div>
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
