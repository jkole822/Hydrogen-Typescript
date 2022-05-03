import gql from 'graphql-tag';

export const HOME_SHOP_INFO = gql`
  query homeShopInfo {
    shop {
      description
    }
  }
`;
