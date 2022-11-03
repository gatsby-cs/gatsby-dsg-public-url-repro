import * as React from "react";
import { graphql } from "gatsby";

export default function SSRPage({ data, serverData }) {
  return (
    <main>
      SSR page
      <ul>
        {data.allFile.nodes.map(({ name, publicURL }) => (
          <li key={name}>
            <img src={publicURL} />
            <p>{publicURL}</p>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(serverData, null, 2)}</pre>
    </main>
  );
}

export async function getServerData() {
  return {
    props: {
      wat: true;
    }
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
