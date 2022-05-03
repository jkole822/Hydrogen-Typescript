import gql from 'graphql-tag';

export const LOCALIZATION = gql`
  query Localization {
    localization {
      availableCountries {
        isoCode
        name
        currency {
          isoCode
        }
      }
    }
  }
`;
