import { Outlet, useNavigation } from "react-router";
import Header from "./Header";
import { useEffect, useState } from "react";
import { QueryContext, RegionContext, ColorModeContext } from "../context";
import { ColorMode } from "../types";
import { css } from "../../styled-system/css";
import Loader from "./Loader";

function RootLayout() {
  const navigation = useNavigation();

  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    const savedMode = localStorage.getItem("color-mode");
    return savedMode === ColorMode.Light ? ColorMode.Light : ColorMode.Dark;
  });
  const [query, setQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const isLoading = navigation.state === "loading";
  const isHomePage = navigation.location?.pathname === "/";

  const toggleColorMode = () => {
    setColorMode((prev) =>
      prev === ColorMode.Light ? ColorMode.Dark : ColorMode.Light
    );
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-color-mode", colorMode);
    localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      <QueryContext.Provider value={{ query, setQuery }}>
        <RegionContext.Provider value={{ region, setRegion }}>
          <div className={css({ position: "sticky", top: 0, zIndex: "100" })}>
            <Header />
          </div>
          <div className={css({ overflow: isLoading ? "hidden" : "auto" })}>
            {isLoading && (
              <div
                className={css({
                  position: "fixed",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                })}
              >
                <div
                  className={css({
                    animation: isHomePage
                      ? "backInLeft 1s both"
                      : "backInRight 1s both",
                    animationDelay: "0.35s",
                  })}
                >
                  <Loader />
                </div>
              </div>
            )}
            <div
              className={css({
                animation: isLoading
                  ? isHomePage
                    ? "backOutRight 1s both"
                    : "backOutLeft 1s both"
                  : undefined,
                animationDelay: "0.1s",
              })}
            >
              <Outlet />
            </div>
          </div>
        </RegionContext.Provider>
      </QueryContext.Provider>
    </ColorModeContext.Provider>
  );
}

export default RootLayout;
