import { css } from "../../styled-system/css";
import { Flags } from "../types";

type CountryFlagProps = {
  flag: Flags;
};

function CountryFlag({ flag }: CountryFlagProps) {
  return (
    <img
      className={css({
        width: "100%",
        height: "auto",
        boxShadow: "xl",
      })}
      src={flag.svg}
      alt={flag.alt}
    />
  );
}

export default CountryFlag;
