import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import leftImage from "../image/Home_left_bg.png";
import Logo from "../image/Retro.png";

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
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${leftImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#698269",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 5,
              height: "650px",
              width:"500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#B99B6B",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            <img src={Logo} alt="Logo" />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, borderRadius: 8,display: 'flex', flexDirection: 'column', alignItems: 'center', }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Username"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  borderRadius: 8,
                  backgroundColor: "#CCB590",
                  "& fieldset": { border: 'none' },
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  borderRadius: 8,
                  backgroundColor: "#CCB590",
                  marginTop: 4,
                  "& fieldset": { border: 'none' },
                  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    color="default"
                  />
                }
                label="Remember me"
                sx={{ color: "#50422C" ,marginBottom:'30px',alignSelf: 'start', mt: 2,marginLeft:-1, }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "#50422C",
                  backgroundColor: "#B29D7A",
                  borderRadius: 20,
                  padding: 2,
                  alignContent:"center",
                  width: "50%",
                  "&:hover": {
                    backgroundColor: "#50422C",
                    color: "#B29D7A",
                    boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container sx={{marginTop:3,}}>
                <Grid item xs sx={{marginRight:1,}}>
                  <Link href="#" variant="body2" style={{ color: "#50422C", }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item sx={{marginLeft:2,}}>
                  <Link href="#" variant="body2" style={{ color: "#50422C" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
