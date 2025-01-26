import { css } from "../styled-system/css";

function DetailFallback() {
  const containerStyle = css({
    display: "flex",
    flexDirection: {
      base: "column",
      md: "row",
    },
    gap: {
      base: "2rem",
      lg: "8rem",
    },
    paddingInline: "2rem",
    maxWidth: "80rem",
    marginInline: "auto",
    marginBlock: "2rem",
    position: "relative",
    paddingTop: "6rem",
    transition: "opacity 150ms linear",
  });

  const buttonStyle = css({
    backgroundColor: "element",
    position: "absolute",
    top: 0,
    fontSize: "1rem",
    fontWeight: 600,
    fontFamily: "body",
    cursor: "pointer",
    border: "none",
    borderRadius: "6px",
    paddingInline: "2rem",
    paddingBlock: "0.5rem",
    color: {
      base: "input",
      _dark: "gray.300",
    },
    fill: {
      base: "input",
      _dark: "gray.300",
    },
    transition: "125ms linear color, 125ms linear fill",
    boxShadow: "md",
    "& svg": {
      transition: "200ms linear transform",
    },
    _hover: {
      color: {
        _dark: "gray.100",
      },
      fill: {
        _dark: "gray.100",
      },
      "& svg": {
        transform: "translateX(-40%)",
      },
    },
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  });

  const listStyles = css({
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
    flex: 1,
  });

  const itemStyles = css({
    height: "1rem",
    backgroundColor: "gray.400",
    borderRadius: "xs",
  });

  return (
    <div className={containerStyle}>
      <button className={buttonStyle}>
        <svg
          className={css({ width: "1.1rem", height: "1.1rem" })}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>{" "}
        Back
      </button>
      <div
        className={css({
          flex: 1,
          display: "flex",
          alignItems: "center",
        })}
      >
        <div
          className={css({
            height: "20rem",
            width: "100%",
            background: "gray.400",
            boxShadow: "xl",
            animation: "pulse",
            opacity: "0.25",
          })}
        />
      </div>
      <div
        className={css({
          flex: 1,
          marginTop: "2rem",
          animation: "pulse",
          animationDelay: "0.25s",
          opacity: "0.25",
        })}
      >
        <div
          className={css({
            height: "2rem",
            width: "10rem",
            background: "gray.400",
            borderRadius: "xs",
            marginBottom: 10,
          })}
        />
        <div
          className={css({
            display: "flex",
            gap: {
              base: "3rem",
              md: "5rem",
            },
            flexDirection: { base: "column", md: "row" },
          })}
        >
          <div className={listStyles}>
            {[
              ["6rem", "7rem"],
              ["5rem", "5rem"],
              ["3rem", "3rem"],
              ["5rem", "7rem"],
              ["3rem", "2rem"],
            ].map((item, index) => (
              <div
                key={index}
                className={css({
                  display: "flex",
                  gap: "0.5rem",
                })}
              >
                <div style={{ width: item[0] }} className={itemStyles} />
                <div style={{ width: item[1] }} className={itemStyles} />
              </div>
            ))}
          </div>
          <div className={listStyles}>
            {[
              ["8rem", "1.1rem"],
              ["5rem", "2rem"],
              ["5rem", "3rem"],
            ].map((item, index) => (
              <div
                key={index}
                className={css({
                  display: "flex",
                  gap: "0.5rem",
                })}
              >
                <div style={{ width: item[0] }} className={itemStyles} />
                <div style={{ width: item[1] }} className={itemStyles} />
              </div>
            ))}
          </div>
        </div>
        <div
          className={css({
            marginTop: {
              base: "3rem",
              md: "5rem",
            },
          })}
        >
          <div
            className={css({
              display: "flex",
              gap: "1.5rem",
              flexDirection: {
                base: "column",
                md: "row",
              },
            })}
          >
            <div
              className={css({
                width: "8rem",
                height: "1rem",
                backgroundColor: "gray.400",
                borderRadius: "xs",
              })}
            />
            <div
              className={css({
                maxWidth: "80%",
                width: "100%",
                height: "1rem",
                backgroundColor: "gray.400",
                borderRadius: "xs",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailFallback;
