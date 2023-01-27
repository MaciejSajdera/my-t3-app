import type { CSSObject, Theme } from "@mui/material/styles";
import { styled as styledMUI } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import theme from "../../../styles/theme";

type TDrawerProps = {
  drawerWidthOpen: string;
};

export const drawerWidthOpenDesktop = "240px";
export const drawerWidthOpenMobile = "100%";

//open drawer
const openedMixin = (themeMUI: Theme, drawerWidthOpen: string): CSSObject => ({
  width: `${drawerWidthOpen}`,
  transition: themeMUI.transitions.create("width", {
    easing: "linear",
    duration: themeMUI.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderColor: "transparent",
  borderRadius: `0px 8px 8px 0px`,
});

//close drawer
const closedMixin = (themeMUI: Theme): CSSObject => ({
  width: `0`,
  [themeMUI.breakpoints.up("md")]: {
    width: `calc(${themeMUI.spacing(8)} + 1px)`,
  },
  transition: themeMUI.transitions.create("width", {
    easing: "linear",
    duration: themeMUI.transitions.duration.enteringScreen,
  }),
});

const openedToggleButttonMixin = (themeMUI: Theme): CSSObject => ({
  left: `calc(${drawerWidthOpenDesktop} - 12px)`,
  top: "90px",
  transition: themeMUI.transitions.create("left", {
    easing: "linear",
    duration: themeMUI.transitions.duration.enteringScreen,
  }),
  svg: {
    fill: theme.customColors.white,
    background: theme.customColors.darkFont,
    transition: themeMUI.transitions.create("all", {
      easing: themeMUI.transitions.easing.easeInOut,
      duration: themeMUI.transitions.duration.enteringScreen,
    }),
  },
  "&:hover": {
    svg: {
      fill: theme.customColors.white,
      background: theme.customColors.primaryBrand,
    },
  },
});

const closedToggleButttonMixin = (themeMUI: Theme): CSSObject => ({
  left: `calc(${themeMUI.spacing(8)} - 12px)`,
  top: "90px",
  transition: themeMUI.transitions.create("left", {
    easing: "linear",
    duration: themeMUI.transitions.duration.enteringScreen,
  }),
  svg: {
    fill: theme.customColors.white,
    background: theme.customColors.primaryBrand,
    transition: themeMUI.transitions.create("all", {
      easing: themeMUI.transitions.easing.easeInOut,
      duration: themeMUI.transitions.duration.enteringScreen,
    }),
  },
  "&:hover": {
    svg: {
      fill: theme.customColors.white,
      background: theme.customColors.darkFont,
    },
  },
});

export const Drawer = styledMUI(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "drawerWidthOpen",
})<TDrawerProps>(({ theme, open, drawerWidthOpen }) => ({
  width: drawerWidthOpen,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme, drawerWidthOpen),
    "& .MuiDrawer-paper": openedMixin(theme, drawerWidthOpen),
    "& .drawer-toggle-button": openedToggleButttonMixin(theme),

    "& .MuiListItemText-root, & .expand-icon": {
      opacity: "1",
      transition: theme.transitions.create("opacity", {
        easing: "linear",
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    [theme.breakpoints.down("md")]: {
      "& .MuiListItemButton-root , & .MuiListItemIcon-root": {
        opacity: "1",
        transition: theme.transitions.create("opacity", {
          easing: "linear",
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
    "& .drawer-toggle-button": closedToggleButttonMixin(theme),

    "& .MuiListItemText-root, & .expand-icon": {
      opacity: "0",
      transition: theme.transitions.create("opacity", {
        easing: "linear",
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    [theme.breakpoints.down("md")]: {
      "& .MuiListItemButton-root , & .MuiListItemIcon-root": {
        opacity: "0",
        transition: theme.transitions.create("opacity", {
          easing: "linear",
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  }),

  "& .logo-holder": {
    height: "8rem",
    maxWidth: "150px",
    margin: "1rem auto 40px",
  },

  "& .logo": {
    padding: "1rem",
    width: "100%",
    transition: theme.transitions.create("padding", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  "& .MuiPaper-root": {
    height: "100%",
    overflowX: "hidden",
    borderColor: "transparent",
    borderRadius: `0px 8px 8px 0px`,
  },

  "& .MuiListItemIcon-root": {
    minWidth: "0",
    minHeight: "0",
    marginRight: "8px",
  },
}));

export default Drawer;
