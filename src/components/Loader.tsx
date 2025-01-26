import { css } from "../../styled-system/css";

function Loader() {
  return (
    <span
      className={css({
        width: 16,
        height: 16,
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: {
          base: "gray.600",
          _dark: "light",
        },
        position: "relative",
        borderRadius: "full",
        boxSizing: "border-box",
        display: "inline-block",
        animation: "rotation 1.5s linear infinite",
        _after: {
          content: "''",
          boxSizing: "border-box",
          width: 6,
          height: 6,
          position: "absolute",
          transform: "translate(-50%, 50%)",
          top: 0,
          left: 0,
          background: {
            base: "blue.500",
            _dark: "blue.400",
          },
          borderRadius: "full",
        },
      })}
    />
  );
}

export default Loader;
