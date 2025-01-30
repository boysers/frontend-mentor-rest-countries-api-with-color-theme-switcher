export enum ColorMode {
  Light = "light",
  Dark = "dark",
}

export type BorderCountries = {
  name: Name;
  cca3: string;
};

export type Countries = Pick<
  Country,
  "cca3" | "name" | "flags" | "population" | "region" | "capital"
>;

export type Country = {
  flags: Flags;
  name: Name;
  cca3: string;
  region: Region;
  population: number;
  languages?: Record<string, string>;
  subregion?: string;
  capital?: string[];
  borders?: string[];
  currencies?: Record<string, Currency>;
  tld?: string[];
};

export type Flags = {
  png: string;
  svg: string;
  alt?: string;
};

export type Name = {
  common: string;
  official: string;
  nativeName?: Record<string, NativeName>;
};

export type NativeName = {
  official: string;
  common: string;
};

export type Currency = {
  name: string;
  symbol: string;
};

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}
