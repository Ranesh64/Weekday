"use client";
import { Lexend } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const lexend = Lexend({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "auto",
});

const theme = createTheme({
  typography: {
    fontFamily: lexend.style.fontFamily,
  },
  components: {
    MuiPaper: {
      defaultProps: {
        sx: { borderRadius: "20px" },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: 16, // Override padding for last child
          },
        },
      },
    },
  },
});

export default theme;
