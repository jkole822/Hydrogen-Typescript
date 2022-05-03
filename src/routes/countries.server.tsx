// GraphQL
import {LOCALIZATION} from '@/lib/graphQL';

export async function api(request: any, {queryShop}: {queryShop: any}) {
  const {
    data: {
      localization: {availableCountries},
    },
  } = await queryShop({
    query: LOCALIZATION,
  });

  return availableCountries.sort((a: any, b: any) =>
    a.name.localeCompare(b.name),
  );
}
