
import { GraphQLClient } from 'graphql-hooks'

const API_URL = "https://graphql.datocms.com/"
const API_TOKEN = "f7e3d2b110f5f753589c0267ef42e2"

export const client = new GraphQLClient({
    url: API_URL,
    headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
    }
});


export const sectionTechnologies = `
{
  allServiceIcons {
    name
    logo {
      url(imgixParams: {})
    }
  }
}
`
