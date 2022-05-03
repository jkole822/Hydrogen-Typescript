import gql from 'graphql-tag';

export const PAGE_DETAILS = gql`
  query PageDetails($language: LanguageCode, $handle: String!)
  @inContext(language: $language) {
    pageByHandle(handle: $handle) {
      title
      body
      title
      seo {
        description
        title
      }
    }
  }
`;
