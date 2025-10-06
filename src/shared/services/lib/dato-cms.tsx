import { GraphQLClient } from "graphql-hooks";

const API_URL = "https://graphql.datocms.com/";
const API_TOKEN_TEST = "e4cd080582975e849981002780803a";

export const client = new GraphQLClient({
  url: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN_TEST}`,
  },
});

export const queryTechnologies = `
{
  allServiceIcons {
    name
    logo {
      url(imgixParams: {})
    }
  }
}
`;
export const queryProjects = `
{
  allProjects {
    project {
      url
    }
    title
    showproject
    github
    projecttype
    technologies
    description
  }
}
`;
export const queryTextStructurLifo = `
{
  allLearnDataStructures {
    title
    textstructureabout
    teste {
      blocks
      value
    }
  }
}
`;
