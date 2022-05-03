import gql from 'graphql-tag';

export const WELCOME_CONTENT = gql`
  query welcomeContent($language: LanguageCode)
  @inContext(language: $language) {
    shop {
      name
    }
    products(first: 3) {
      edges {
        node {
          handle
        }
      }
    }
    collections(first: 3) {
      edges {
        node {
          handle
        }
      }
    }
  }
`;
