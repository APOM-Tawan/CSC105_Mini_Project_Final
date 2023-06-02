import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import search_bg from "../image/search_bg.png";
import SpotifySongCard from "../component/song_card";

const theme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          position: "relative",
          height: "100vh",
          background: `url(${search_bg}) no-repeat center / cover`,
        }}
      >
        <Grid
          container
          component="main"
          sx={{ height: "100%" }}
          alignItems="center"
          justifyContent="center"
        >
          {/* Content */}
          <Grid
            item
            xs={12}
            sm={8}
            md={9}
            component={Paper}
            elevation={6}
            square
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start", // Align content to the left
              borderRadius: 8,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Add your content here */}
            <div style={{ display: "flex",}}>
              <ul style={{ listStyleType: "none", display: "flex" }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <SpotifySongCard />
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>

        {/* Search Box */}
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "30%",
            transform: "translateX(-50%)",
            zIndex: 1,
            textAlign: "center",
            width: "80%", // Adjust the width based on your design needs
            maxWidth: "500px", // Set a maximum width for the search box
          }}
        >
          {/* Add your search box component here */}
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            sx={{
              width: "220%", // Adjust the width based on your design needs
              borderRadius: 20,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              padding: 1,
              "& fieldset": { border: "none" },
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              input: { color: "#9E8E74", fontSize: 20, marginLeft: 2 },
            }}
            InputLabelProps={{
              sx: {
                fontSize: 24,
                left: 20,
                color: "#9E8E74",
              },
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
