import gql from 'graphql-tag';

export const SHOP_INFO = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;
