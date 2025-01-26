import { createContext } from "react";
import { noop } from "./utils";
import { ColorMode } from "./types";

export const QueryContext = createContext<{
  query: string;
  setQuery: (q: string) => void;
}>({ query: "", setQuery: noop("setQuery") });

export const RegionContext = createContext<{
  region: string;
  setRegion: (q: string) => void;
}>({ region: "", setRegion: noop("setRegion") });

export const ColorModeContext = createContext<{
  colorMode: ColorMode;
  toggleColorMode: () => void;
}>({
  colorMode: ColorMode.Light,
  toggleColorMode: noop("toggleColorMode"),
});
