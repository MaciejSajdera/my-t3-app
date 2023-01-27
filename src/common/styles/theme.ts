/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
/*
 * Transforms pixels integer into string
 * @param value number of pixels
 * @returns string for CSS
 */
export type pixels = number;
export const px = (value: pixels): string => `${value}px`;
export const evalPx = (value?: string | number) =>
  value ? (typeof value === "string" ? value : px(value)) : undefined;

declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      [propName: string]: string;
    };
    boxShadows?: {
      [propName: string]: string;
    };
    boxShadowSpreads?: {
      [propName: string]: string;
    };
    overlays?: {
      [propName: string]: string;
    };
    border?: {
      [propName: string]: string | number;
    };
    borderRadius?: {
      [propName: string]: string | number;
    };
    customTransitionsDurations?: {
      [propName: string]: string;
    };
    customTransitionsEasings?: {
      [propName: string]: string;
    };
    fonts?: {
      [propName: string]: string;
    };
    fontWeights?: {
      [propName: string]: number;
    };
    paddings?: {
      [propName: string]: string;
    };
    spacings: {
      [propName: string]: string;
    };
    shades?: {
      [propName: string]: string;
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    customColors: {
      [propName: string]: string;
    };
    boxShadows: {
      [propName: string]: string;
    };
    boxShadowSpreads: {
      [propName: string]: string;
    };
    overlays?: {
      [propName: string]: string;
    };
    border?: {
      [propName: string]: string | number;
    };
    borderRadius: {
      [propName: string]: string | number;
    };
    fonts: {
      [propName: string]: string;
    };
    fontWeights?: {
      [propName: string]: number;
    };
    paddings?: {
      [propName: string]: string;
    };
    zIndexes?: {
      [propName: string]: number;
    };
    spacings: {
      [propName: string]: string;
    };
    sizes?: {
      [propName: string]: string;
    };
    shades: {
      [propName: string]: string;
    };
  }
}

// Theme's 1st layer
const themeLayer1 = {
  typography: {
    fontFamily: "Open Sans",
  },
  fonts: {
    primary: "Open Sans",
  },
  fontWeights: {
    regular: 400,
    bold: 600,
    black: 700,
  },
  customColors: {
    darkFont: "#000",
    primaryBrand: "#0069CC",
    primaryBrandDark: "#00519E",
    primaryBrandLight: "#0083FF",
    primaryBrand90: "#00376b",
    secondaryBrand: "#0047ee",
    shadesPrimaryBrand10: "#F5FAFF",
    shadesPrimaryBrand20: "#CCE6FF",
    shadesPrimaryBrand90: "#00376b33",
    shadesPrimaryBrand50: "#cc826b",
    colorsSecondaryBrand: "#221e1f",
    shadesSecondaryBrand30: "#d6d1d2",
    shadesSecondaryBrand70: "#808080",
    colorsInfo: "#0167ac",
    shadesInfo20: "#e1f3ff",
    positiveInfo: "#169B62",
    specialInfo: "#CA266F",
    shadesPositive20: "#E9FCF4",
    shadesPositive50: "#107047",
    shadesDark10: "#EEECED",
    error: "#E20015",
    errorDark: "#7A000B",
    errorLight: "#FFE0E3",
    lightGrey: "#B2B2B2",
    white: "#fff",
    darkBackground: "#000",
    semiTran70: "rgb(255 255 255 / 72%)",
    semiTran90: "rgb(255 255 255 / 96%)",
    orange: "#E16C2F",
    cancelRed: "#AD0010",
    darkGrey: "#333333",
  },
  overlays: {
    overlayImage: "#00519e14",
  },
  paddings: {
    sidePadding: "1rem",
    sidePadding900: "5%",
    sidePadding1200: "7.5%",
    sidePadding1536: "10%",
    buttonPaddingStandardY: "0.5em",
    buttonPaddingStandardX: "2em",
    buttonPaddingOutlinedX: "2em",
  },
  zIndexes: {
    zIndexPreloader: 10000,
    zIndexModal: 9999,
    zIndexMenuToggle: 9998,
    zIndexHeader: 1000,
    zIndexFront: 1,
    zIndexBehind: -1,
  },

  spacings: {
    xs8: px(2),
    xs6: px(4),
    xs5: px(8),
    xs4: px(16),
    xs3: px(24),
    xs2: px(32),
    xs1: px(36),
    xs: px(40),
    s: px(48),
    m: px(56),
    l: px(64),
    xl: px(80),
    xl2: px(96),
    xl3: px(128),
    xl4: px(192),
    xl5: px(240),
    xl6: px(296),
  },
  sizes: {
    selectMinWidth: px(200),
  },
  shades: {
    lightGrey: "rgba(77, 77, 77, 0.16)",
    grey: "rgba(26, 26, 26, 0.16)",
    primary: "rgba(0, 105, 204, 0.16)",
    error: "rgba(226, 0, 21, 0.16)",
    cardShadowGrey: "rgba(128, 128, 128, 0.2)",
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    unit: "px",
  },

  boxShadowSpreads: {
    s: "0px 5px 10px",
    m: "4px 8px 16px",
    l: "0px 16px 50px",
  },
};

// Theme's 2nd layer
const themeLayer2 = {
  palette: {
    mode: "light",
    common: { black: "#000", white: "#fff" },
    primary: {
      main: themeLayer1.customColors.primaryBrand,
      light: themeLayer1.customColors.primaryBrandLight,
      dark: themeLayer1.customColors.primaryBrandDark,
      contrastText: themeLayer1.customColors.white,
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: themeLayer1.customColors.white,
    },
    error: {
      main: themeLayer1.customColors.error,
      light: themeLayer1.customColors.errorLight,
      dark: "#AD0010",
      contrastText: themeLayer1.customColors.white,
    },
    warning: {
      main: "#FFB511",
      light: "#FFF4DB",
      dark: "#DB9700",
      contrastText: themeLayer1.customColors.white,
    },
    info: {
      main: "#1B8DC6",
      light: themeLayer1.customColors.shadesPrimaryBrand20,
      dark: "#1674A2",
      contrastText: themeLayer1.customColors.white,
    },
    success: {
      main: "#1DC97F",
      light: themeLayer1.customColors.shadesPositive20,
      dark: themeLayer1.customColors.positiveInfo,
      contrastText: themeLayer1.customColors.white,
    },
    disabled: {
      main: themeLayer1.customColors.lightGrey,
    },
    grey: {
      "100": themeLayer1.customColors.shadesSecondaryBrand70,
      "200": "#eeeeee",
      "300": "#e6e6e6",
      "400": "#bdbdbd",
      "500": "#999999",
    },
  },
  boxShadows: {
    standard: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.customColors.shadesDark10}`,
    input: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.shades.lightGrey}`,
    inputHover: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.shades.grey}`,
    inputError: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.customColors.errorLight}`,
    list: `0px 5px 10px ${themeLayer1.customColors.shadesPrimaryBrand90}, 0px 16px 50px ${themeLayer1.customColors.shadesPrimaryBrand90}`,
    card: `${themeLayer1.boxShadowSpreads.s} ${themeLayer1.shades.cardShadowGrey}, 0px 16px 50px ${themeLayer1.shades.cardShadowGrey}`,
  },
  border: {
    table: `1px solid ${themeLayer1.customColors.lightGrey}`,
  },
  borderRadius: {
    m: px(9),
    l: px(16),
  },
};

// Typography
const themeTypography = {
  typography: {
    h1: {
      fontSize: `clamp(26px, 4vw + 0.5rem, 28px)`,
      fontWeight: 700,
      margin: "0 0 1.6rem",
      color: themeLayer1.customColors.primaryBrandDark,
    },
    h2: {
      fontSize: "clamp(22px, 4vw + 0.5rem, 24px)",
      fontWeight: 700,
      margin: "0 0 1.4rem",
    },
    h3: {
      fontSize: "clamp(16px, 4vw + 0.5rem, 18px)",
      fontWeight: 700,
      margin: "0 0 1.4rem",
    },
    h4: {
      fontSize: "clamp(22px, 4vw + 0.5rem, 28px)",
      fontWeight: 700,
      margin: "0 0 1.4rem",
    },
    h5: {
      margin: "0 0 1rem",
      fontSize: "10px",
    },
    h6: {
      fontSize: `10px`,
    },
  },
};

// global menuClasses used in both MuiModal (mobile) and MuiDrawer (desktop)
const menuClasses = {
  "& .MuiListItemButton-root": {
    color: themeLayer1.customColors.primaryBrandDark,

    a: {
      color: themeLayer1.customColors.primaryBrandDark,
      "&:hover": {
        color: themeLayer1.customColors.colorsSecondaryBrand,
      },
    },

    // "&:hover": {
    //   backgroundColor: "transparent!important",
    // },

    "& .MuiListItemText-root": {
      color: "currentColor",
    },

    "& .MuiListItemButton-root": {
      "> a": {
        color: themeLayer1.customColors.lightGrey,
      },
    },

    "&.Mui-selected, & .Mui-selected": {
      color: themeLayer1.customColors.errorDark,
      backgroundColor: "transparent",

      a: {
        color: themeLayer1.customColors.errorDark,
      },
    },
  },

  "& .MuiListItemButton-root.secondary": {
    color: themeLayer1.customColors.lightGrey,
    a: {
      color: themeLayer1.customColors.lightGrey,
      "&:hover": {
        color: themeLayer1.customColors.colorsSecondaryBrand,
      },
    },

    "&.Mui-selected, & .Mui-selected": {
      color: themeLayer1.customColors.errorDark,

      a: {
        color: themeLayer1.customColors.errorDark,
      },
    },
  },
};

const themeComponents = {
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-gutterBottom": {
            marginBottom: 0,
          },
        },
      },
    },

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: themeLayer1.customColors.darkFont,
          overflowWrap: "break-word",
          alignItems: "flex-start",
        },
        label: {
          paddingTop: "9px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          "&.MuiInputBase-input": {
            paddingRight: themeLayer1.spacings.xs1,
          },

          "&.Mui-selected": {
            backgroundColor: themeLayer1.customColors.shadesPrimaryBrand20,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: `${themeLayer1.paddings.buttonPaddingStandardY} ${themeLayer1.paddings.buttonPaddingStandardX}`,
          borderRadius: themeLayer2.borderRadius.m,
          fontFamily: themeLayer1.fonts.primary,
          fontWeight: themeLayer1.fontWeights.black,
          height: "100%",

          width: "fit-content",

          "&.MuiButton-sizeSmall": {
            fontSize: "10px",
          },

          "&.MuiButton-containedPrimary": {
            boxShadow: `${themeLayer1.boxShadowSpreads.s || "0px 5px 10px"} ${
              themeLayer1.shades.primary
            }, ${themeLayer1.boxShadowSpreads.l} ${themeLayer1.shades.primary}`,
            color: themeLayer1.customColors.white,
          },
          "&.MuiButton-negative": {
            backgroundColor: themeLayer1.customColors.error,
            boxShadow: `${themeLayer1.boxShadowSpreads.s} ${themeLayer1.shades.error}, ${themeLayer1.boxShadowSpreads.l} ${themeLayer1.shades.error}`,
            color: themeLayer1.customColors.white,

            "&:hover": {
              backgroundColor: themeLayer1.customColors.errorDark,
            },
          },
          "&.MuiButton-outlinedPrimary": {
            borderColor: `${themeLayer1.customColors.primaryBrand}`,
          },
          "&:hover": {
            boxShadow: "none",
          },
          "&.Mui-disabled": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: themeLayer1.customColors.shadesPrimaryBrand20,
          "& .MuiChip-label": {
            fontSize: "1rem",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          boxShadow: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.shades.lightGrey}`,
          backgroundColor: themeLayer1.customColors.white,

          "&.MuiListItemText-root": {
            marginTop: "0",
            marginBottom: "0",
          },

          "&.MuiInputBase-multiline": {
            height: "100%",

            textarea: {
              height: "100%",

              /* width */
              "::-webkit-scrollbar": {
                width: "10px",
                borderRadius: themeLayer2.borderRadius.m,
              },

              /* Track */
              "::-webkit-scrollbar-track": {
                background: themeLayer1.shades.primary,
                borderRadius: themeLayer2.borderRadius.m,
              },

              /* Handle */
              "::-webkit-scrollbar-thumb": {
                background: themeLayer1.customColors.primaryBrandLight,
                borderRadius: themeLayer2.borderRadius.m,
              },
            },
          },

          "&:hover": {
            boxShadow: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.shades.grey}`,
          },

          "&.Mui-focused": {
            boxShadow: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.shades.primary}`,
          },

          "&.Mui-error": {
            boxShadow: `${themeLayer1.boxShadowSpreads.m} ${themeLayer1.shades.error}`,
            color: themeLayer1.customColors.error,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "&.MuiFormControl-root": {
            width: "100%",
          },
          "& .MuiInputAdornment-root svg": {
            fill: themeLayer1.customColors.lightGrey,
          },
          "& .MuiFormLabel-root": {
            "&.Mui-focused": {
              color: themeLayer1.customColors.colorsInfo,
            },
            "&.Mui-error": {
              color: themeLayer1.customColors.error,
              borderColor: themeLayer1.customColors.error,
            },
          },
          "& .MuiFormLabel-filled": {
            color: themeLayer1.customColors.colorsSecondaryBrand,
          },
          "& .MuiOutlinedInput-root": {
            borderRadius: themeLayer2.borderRadius.m,
            borderColor: themeLayer1.customColors.shadesSecondaryBrand30,

            "& input": {
              borderRadius: themeLayer2.borderRadius.m,
              borderColor: themeLayer1.customColors.shadesSecondaryBrand30,
            },

            "& fieldset": {
              borderColor: themeLayer1.customColors.shadesSecondaryBrand30,
              transition: "all 0.3s ease-in-out",
            },
            "&:hover fieldset": {
              borderColor: themeLayer1.customColors.colorsSecondaryBrand,
            },
            "&.Mui-focused fieldset": {
              borderColor: themeLayer1.customColors.colorsInfo,
              borderWidth: "1px",
            },
            "&.Mui-error fieldset": {
              color: themeLayer1.customColors.error,
              borderColor: themeLayer1.customColors.error,
            },
          },
          "& .MuiOutlinedInput-root.Mui-error": {
            color: themeLayer1.customColors.error,
            borderColor: themeLayer1.customColors.error,

            "& svg": {
              fill: themeLayer1.customColors.error,
            },

            "& svg.MuiChip-deleteIconColorDefault": {
              fill: themeLayer1.customColors.shadesSecondaryBrand70,
            },
          },

          "& .MuiOutlinedInput-root.Mui-disabled": {
            backgroundColor: themeLayer2.palette.grey["300"],
            borderColor: themeLayer2.palette.grey["500"],
          },

          "& .MuiFormHelperText-root": {
            position: "absolute",
            transform: "translateY(100%)",
            fontSize: "10px",
            bottom: "-5px",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: themeLayer1.customColors.lightGrey,
          "&.Mui-checked": {
            color: themeLayer1.customColors.primaryBrandDark,
          },
          "&.Mui-disabled": {
            color: themeLayer1.customColors.shadesSecondaryBrand30,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: themeLayer1.customColors.lightGrey,
          "&.MuiRadio-root.Mui-checked": {
            color: themeLayer1.customColors.primaryBrandDark,
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          color: themeLayer1.customColors.shadesPrimaryBrand20,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: themeLayer2.borderRadius.m,
          "&.MuiAlert-standardError": {
            color: themeLayer1.customColors.errorDark,
            border: `1px solid ${themeLayer1.customColors.errorDark}`,
            backgroundColor: themeLayer2.palette.error.light,
            "& svg": {
              fill: themeLayer1.customColors.errorDark,
            },
          },
          "&.MuiAlert-standardInfo": {
            color: themeLayer2.palette.info.dark,
            border: `1px solid ${themeLayer2.palette.info.dark}`,
            backgroundColor: themeLayer2.palette.info.light,
            "& svg": {
              fill: themeLayer2.palette.info.dark,
            },
          },
          "&.MuiAlert-standardWarning": {
            color: themeLayer2.palette.warning.dark,
            border: `1px solid ${themeLayer2.palette.warning.dark}`,
            backgroundColor: themeLayer2.palette.warning.light,
            "& svg": {
              fill: themeLayer2.palette.warning.dark,
            },
          },
          "&.MuiAlert-standardSuccess": {
            color: themeLayer2.palette.success.dark,
            border: `1px solid ${themeLayer2.palette.success.dark}`,
            backgroundColor: themeLayer2.palette.success.light,
            "& svg": {
              fill: themeLayer2.palette.success.dark,
            },
          },
        },
      },
    },

    MuiModal: {
      styleOverrides: {
        root: {
          "& .MuiPaper-root": {
            borderRadius: themeLayer2.borderRadius.l,
            marginTop: themeLayer1.spacings.xs6,
            boxShadow: themeLayer2.boxShadows.list,
            "&::-webkit-scrollbar": {
              width: 0,
            },

            "& .MuiList-root": {
              "& .MuiMenuItem-root.Mui-selected": {
                backgroundColor: themeLayer1.customColors.shadesPrimaryBrand20,
              },
            },
          },
          ...menuClasses,
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        root: {
          ...menuClasses,
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        root: {
          "& .MuiBadge-badge": {
            backgroundColor: `${themeLayer1.customColors.primaryBrand}`,
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          padding: "40px",
          boxShadow: themeLayer2.boxShadows.list,
          height: "100%",

          "& .MuiCardActions-root": {
            padding: "initial",
          },

          "& .MuiCardContent-root": {
            padding: "initial",
          },
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            transition: `0.3s ease-in-out`,
            backgroundColor: themeLayer2.palette.primary.dark,
            color: themeLayer2.palette.common.white,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "initial",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minWidth: "100px",
          width: "100%",

          "& .MuiOutlinedInput-root": {
            borderRadius: themeLayer2.borderRadius.m,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: themeLayer1.customColors.error,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          th: {
            borderBottom: `2px solid ${themeLayer2.palette.grey["400"]}`,
            minWidth: `120px`,
            padding: "16px",

            p: {
              color: themeLayer2.palette.grey["500"],
              textTransform: "uppercase",
              fontWeight: 700,
              fontSize: "12px",
              maxWidth: `110px`,
            },
          },
          "& .MuiTableCell-alignRight": {
            p: {
              marginLeft: "auto",
            },
          },
          "& .MuiTableCell-alignLeft": {
            p: {
              marginRight: "auto",
            },
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          td: {
            padding: "14px 12px",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: "#1A1A1A",
        },
      },
    },
    MuiTableFooter: {
      styleOverrides: {
        root: {
          td: {
            borderBottom: `none`,
            padding: "16px",
          },
        },
      },
    },
  },
};

const theme = createTheme(
  themeLayer1,
  themeLayer2,
  themeTypography,
  themeComponents
);

export default theme;
