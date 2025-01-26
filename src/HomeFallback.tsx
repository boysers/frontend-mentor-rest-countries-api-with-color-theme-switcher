import { css } from "../styled-system/css";

function HomeFallback() {
  const containerStyle = css({
    fontSize: "0.875rem",
    display: "grid",
    gridTemplateColumns: {
      base: "1fr",
      sm: "repeat(2, 1fr)",
      md: "repeat(3, 1fr)",
      lg: "repeat(4, 1fr)",
    },
    flexWrap: "wrap",
    gap: {
      base: "2rem",
      lg: "4rem",
    },
    justifyContent: "center",
    justifyItems: "center",
    marginBlock: "3rem",
  });

  const inputStyle = css({
    backgroundColor: "element",
    border: "none",
    paddingBlock: "1.25rem",
    paddingInline: "2rem",
    paddingLeft: 20,
    fontSize: "0.875rem",
    color: { base: "input", _dark: "gray.300" },
    maxWidth: "30rem",
    width: "100%",
    borderRadius: "4px",
    boxShadow: "md",
    boxSizing: "border-box",
    _placeholder: {
      color: { base: "input", _dark: "gray.400" },
    },
    _focus: {
      outline: "none",
    },
  });

  const selectStyle = css({
    backgroundColor: "element",
    border: "none",
    paddingBlock: "1.25rem",
    paddingInline: "1.5rem",
    fontSize: "0.875rem",
    color: { base: "gray.800", _dark: "gray.300" },
    maxWidth: "12.5rem",
    width: "100%",
    borderRadius: "4px",
    boxShadow: "md",
    _placeholder: {
      color: "gray.400",
    },
    _focus: {
      outline: "none",
    },
  });

  return (
    <div
      className={css({
        maxWidth: "80rem",
        marginInline: "auto",
        paddingInline: "2rem",
        transition: "opacity 150ms linear",
      })}
    >
      <div
        className={css({
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "3rem",
        })}
      >
        <div
          className={css({
            position: "relative",
            maxWidth: "30rem",
            width: "100%",
          })}
        >
          <svg
            className={css({
              fill: "text",
              width: 5,
              position: "absolute",
              top: "50%",
              left: 8,
              transform: "translateY(-50%)",
            })}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
          <input
            type="text"
            name="country"
            placeholder="Search for a country..."
            className={inputStyle}
          />
        </div>
        <select name="region" className={selectStyle}>
          <option value="">Filter by Region</option>
        </select>
      </div>
      <div className={containerStyle}>
        {Array.from({ length: 20 }).map((_, skeletonIdx) => (
          <div
            key={skeletonIdx}
            className={css({
              maxWidth: "18rem",
              width: "100%",
              animation: "fadeIn",
              animationDelay: { base: "0.25s", md: "0s" },
              animationDuration: "0.5s",
              animationFillMode: "both",
            })}
          >
            <article
              className={css({
                height: "21.5rem",
                backgroundColor: "element",
                boxShadow: "md",
                borderRadius: "6px",
                overflow: "hidden",
                animation: "pulse",
              })}
            >
              <div
                className={css({
                  height: "10rem",
                  width: "100%",
                  background: "text",
                  opacity: {
                    base: "0.1",
                    _dark: "0.05",
                  },
                })}
              />
              <div
                className={css({
                  paddingInline: "1.5rem",
                  paddingBlock: "1.75rem",
                })}
              >
                <div
                  className={css({
                    height: "1.3125rem",
                    width: "10rem",
                    backgroundColor: "text",
                    opacity: "0.05",
                    borderRadius: "xs",
                    marginBottom: 8,
                  })}
                />
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={`${skeletonIdx}-${index}`}
                    className={css({
                      height: "0.875rem",
                      width: "8rem",
                      backgroundColor: "text",
                      opacity: "0.05",
                      borderRadius: "xs",
                      marginBlock: 2,
                    })}
                  />
                ))}
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeFallback;
