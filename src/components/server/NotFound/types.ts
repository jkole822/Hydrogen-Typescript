interface Country {
  isoCode: string;
}

export interface NotFoundProps {
  country?: Country;
  response?: any;
}
