import { useContext } from "react";
import { QueryContext, RegionContext, ColorModeContext } from "./context";

export const useQuery = () => useContext(QueryContext);

export const useRegion = () => useContext(RegionContext);

export const useTheme = () => useContext(ColorModeContext);
