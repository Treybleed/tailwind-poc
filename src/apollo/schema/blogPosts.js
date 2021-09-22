import {
  gql,
} from "@apollo/client";

const CONTENTFUL_BLOGPOSTS = gql`
query getAllContentfulPosts {
  posts {
    postTitle,
    author,
    date
  }
}

`;

export default CONTENTFUL_BLOGPOSTS;