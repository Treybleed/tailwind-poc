import {
  gql,
} from "@apollo/client";

const CONTENTFUL_HEROS = gql`
query getAllHeros {
  hero {
    title
    paragraphCopy
    buttonTitle
    buttonUrl
  }
}

`;

export default CONTENTFUL_HEROS;