import React, { Context } from "react";
import { css as emotionCss } from "@emotion/core";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [14, 16, 18, 20, 24, 32, 40],
  fontWeights: [400, 500, 600, 700],
  colors: {
    primary: {
      base: "#6666CC",
      secondary: "#E8E8FE",
      dark: "#3344AA",
      light: "#E8E8FE"
    },
    unstack: {
      base: "#FFCC33",
      secondary: "#FFEEAA",
      dark: "#FFBB00",
      light: "#FFF8DD"
    },
    white: "#FFFFFF",
    black: "#333333",
    grey: {
      dark: "#4A4A4A"
    }
  },
  minWidths: [64, 128, 256, 354, 512],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "'Poppins', sans-serif",
    body: "'Open Sans', sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  radii: ["0px", "4px", "30px"],
  maxWidths: []
};
theme.maxWidths.container = "1120px";
theme.maxWidths.fullWidth = "720px";

theme.colors.h4 = theme.colors.black;

theme.space.h1 = theme.space[2];

theme.fontSizes.h1 = theme.fontSizes[6];
theme.fontSizes.h2 = theme.fontSizes[5];
theme.fontSizes.h3 = theme.fontSizes[4];
theme.fontSizes.h4 = theme.fontSizes[3];
theme.fontSizes.h5 = theme.fontSizes[2];
theme.fontSizes.h6 = theme.fontSizes[1];

theme.fontWeights.h1 = theme.fontWeights[3];
theme.fontWeights.h2 = theme.fontWeights[2];
theme.fontWeights.h3 = theme.fontWeights[1];
theme.fontWeights.h4 = theme.fontWeights[3];
theme.fontWeights.h5 = theme.fontWeights[0];
theme.fontWeights.h6 = theme.fontWeights[1];

theme.buttons = {
  primary: {
    color: theme.colors.white,
    backgroundColor: theme.colors.primary.dark
  },
  outline: {
    color: theme.colors.primary.dark,
    backgroundColor: theme.colors.white
  }
};

theme.tags = {
  unstack: {
    color: theme.colors.unstack.dark,
    backgroundColor: theme.colors.unstack.light,
    borderColor: theme.colors.unstack.secondary
  }
};

function isObject(item) {
  return (
    item && typeof item === "object" && !Array.isArray(item) && item !== null
  );
}

function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!target[key] || !isObject(target[key])) {
          target[key] = source[key];
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
  return target;
}

const makeAddCss = function({ ...rest }) {
  return function() {
    const dynamicValues = Array.from(arguments).slice(1, arguments.length + 1);
    const rawStringArray = arguments[0];
    let finalStyleString = "";
    let finalStyleObject = {};

    const stringifyStyle = styleObject =>
      Object.keys(styleObject).reduce((result, nextKey) => {
        const kebabCased = nextKey
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .toLowerCase();
          if (kebabCased.indexOf("media") != -1) {
            const cssObject = stringifyStyle(styleObject[nextKey]);
            result += `${kebabCased} {${cssObject}};`;
          } else {
            result += `${kebabCased}:${styleObject[nextKey]};`;
          }
        return result;
      }, "");

    for (const value of dynamicValues) {
      if (typeof value === "function") {
        const output = value({ theme, ...rest });
        if (typeof output === "string") {
          finalStyleString += output;
        } else if (output) {
          if (output.length) {
            for (const styleObject of output) {
              if (styleObject) {
                if (typeof styleObject === "object") {
                  if (Array.isArray(styleObject)) {
                    for (const insideStyleObject of styleObject) {
                      mergeDeep(finalStyleObject, insideStyleObject);
                    }
                  } else {
                    mergeDeep(finalStyleObject, styleObject);
                  }
                  //finalStyleString += stringifyStyle(styleObject);
                }
              }
            }
          } else {
            finalStyleString += stringifyStyle(output);
          }
        }
      }
    }
    for (const line of rawStringArray) {
      finalStyleString += line;
    }
    const result = emotionCss`
        ${finalStyleString};
      `;
    return emotionCss(result, finalStyleObject);
  };
};

const { Provider, Consumer } = new React.createContext(theme);

export const withTheme = Component => props => {
  const addCss = makeAddCss(Object.assign({}, Component.defaultProps, props));
  return (
    <Consumer>
      {contextualTheme => (
        <Component {...props} addCss={addCss} theme={contextualTheme} />
      )}
    </Consumer>
  );
};

export const ThemeProvider = ({ children }) => (
  <Provider value={theme}>{children}</Provider>
);

export default theme;
