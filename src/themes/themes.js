import { createTheme, styled } from "@material-ui/core/styles";
import { Select, MenuItem, TextField } from "@mui/material";

const myTypography = createTheme({
  typography: {
    title: {
      fontSize: 30,
      fontWeight: "bold",
      fontFamily: "Overpass"
    },
    shopName: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "Overpass"
    },
    widgetName: {
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: "Overpass"
    },
    buttonName: {
      fontSize: 11,
      fontWeight: "bold",
      fontFamily: "Overpass"
    },
    plainText: {
      fontSize: 11,
      fontWeight: "regular",
      fontFamily: "Overpass"
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      header: "#0A2647",
      default: "#3B516C",
      widget: "#233C5A"
    },

    text: {
      primary: "#000000",
      secondary: "#777777",
      header: "#000000",
      widgetHeader: "#000000"
    },

    button: {
      buttonText: "#000000",
      buttonBackground: "#3B516C",
      buttonFrame: "#000000",
      buttonHover: "#233C5A"
    },

    opinions: {
      five: "#009E23",
      four: "#50DA6E",
      three: "#D0BF1D",
      two: "#FF961A",
      one: "#FF0000"
    }
  },
  typography: myTypography.typography
});

export const lightTheme = createTheme({
  palette: {
    type: "light",

    background: {
      header: "#0081C9",
      default: "#E6F3FA",
      widget: "#BFDFF1"
    },

    text: {
      primary: "#000000",
      secondary: "#777777",
      header: "#000000",
      widgetHeader: "#000000"
    },

    button: {
      buttonText: "#000000",
      buttonBackground: "#E6F3FA",
      buttonFrame: "#000000",
      buttonHover: "#BFDFF1"
    },

    opinions: {
      five: "#009E23",
      four: "#50DA6E",
      three: "#D0BF1D",
      two: "#FF961A",
      one: "#FF0000"
    }
  },
  typography: myTypography.typography
});

export const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.button.buttonText,
  fontSize: 11,
  fontWeight: "regular",
  fontFamily: "Overpass"
}));

export const MySelect = styled(Select)(({ theme }) => ({
  backgroundColor: theme.palette.button.buttonBackground,
  color: theme.palette.button.buttonText,
  fontSize: 11,
  fontFamily: "Overpass",
  fontWeight: "regular",
  height: 30,
  width: 130,
  "& .MuiSelect-icon": {
    color: theme.palette.button.buttonText
  },
  "& fieldset": {
    border: "1px solid black"
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "2px solid black"
  }
}));

export const MyTextField = styled(TextField)(({ theme }) => ({
  fontSize: 11,
  fontFamily: "Overpass",
  fontWeight: "regular",
  "&.MuiTextField-root": {
    backgroundColor: theme.palette.background.default,
    borderRadius: 1,
    color: theme.palette.text.header
  },
  "& label.Mui-focused": {
    color: theme.palette.text.header
  },
  "& label": {
    color: theme.palette.text.header
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.text.header
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.text.header
    },
    "&.MuiInputBase-root.Mui-disabled": {
      color: theme.palette.text.header
    }
  }
}));
