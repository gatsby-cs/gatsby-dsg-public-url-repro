import * as React from "react";
import { graphql } from "gatsby";

export default function DSGPage({ data }) {
  return (
    <main>
      DSG page
      <ul>
        {data.allFile.nodes.map(({ name, publicURL }) => (
          <li key={name}>
            <img src={publicURL} />
            <p>{publicURL}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function config() {
  return () => {
    return {
      defer: true,
    };
  };
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        publicURL
      }
    }
  }
`;
