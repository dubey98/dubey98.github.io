import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Img from "gatsby-image";

function GithubBtn({ src }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(
        relativePath: { eq: "GitHub-Mark-120px-plus.png" }
        childrenImageSharp: {}
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <a href={src} target="_blank" rel="noreferrer">
      <button className="px-3 p-2 border border-red-700">
        <div>
          <Img fluid={data.file.childImageSharp.fluid} /> Github
        </div>
      </button>
    </a>
  );
}

export default GithubBtn;
