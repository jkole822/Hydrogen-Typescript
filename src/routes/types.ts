interface Country {
  isoCode: string;
}

interface Image {
  url: string;
  title: string;
  caption: string;
}

export interface IndexProps {
  country: Country;
}

export interface SitemapProps {
  request: any;
  response: any;
}

export interface RenderUrlTagProps {
  image?: Image;
  url: any;
  lastMod: string;
  changeFreq: string;
}
