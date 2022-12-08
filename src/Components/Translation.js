import React from "react";
import { useTranslation } from "react-i18next";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

//functions

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(0),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white" /*theme.palette.background.paper,*/,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "2px 26px 2px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

function Translation() {
  const [t, i18n] = useTranslation();
  const [langue, setLangue] = React.useState("");

  const handleChange = (event) => {
    setLangue(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
      <Select
        id="demo-customized-select-native"
        value={langue}
        onChange={handleChange}
        input={<BootstrapInput />}
      >
        <MenuItem
          value={10}
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          En
        </MenuItem>
        <MenuItem
          value={20}
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          Fr
        </MenuItem>
        <MenuItem
          value={30}
          onClick={() => {
            i18n.changeLanguage("ar");
          }}
        >
          Ar
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default Translation;
