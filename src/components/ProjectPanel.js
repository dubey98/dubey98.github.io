import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import GithubBtn from "../components/GithubBtn";
import Img from "gatsby-image";

function ProjectPanel() {
  const imgData = useStaticQuery(graphql`
    query ImgQuery {
      file(relativePath: { eq: "vastram-1.png" }, childrenImageSharp: {}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 hover:shadow-lg">
      <div className="relative">
        <div className="h-80 w-full">
          <Img
            fluid={imgData.file.childImageSharp.fluid}
            className="h-80"
            imgClassName="object-contain h-80 align-top"
          />
        </div>
        <div className="absolute py-9 top-0 text-center h-full border border-black w-full hidden hover:block">
          this text goes over the image
        </div>
      </div>
      <div className="flex flex-col p-2 h-80 ">
        <div className="flex-1 mt-11">
          <span className="uppercase text-4xl font-semibold">vastram</span>{" "}
          <br />
          <span className="uppercase text-sm">
            A FULLY FUNCTIONING E-COMMERCE APPLICATION <br />
            WITH AUTHENTICATION, PRODUCT CATEGORIES, <br />
            AND ORDERS.
          </span>
          <br />
          <span className="uppercase text-xs">
            VASTRAM IS BUILT USING REACT, EXPRESS AND MONGODB.
          </span>
        </div>
        <div className="flex-0 p-2 flex justify-end">
          <GithubBtn src="https://github.com/dubey98/vastram" />
        </div>
      </div>
    </div>
  );
}

export default ProjectPanel;
