import React from "react";
import pic from "../image/pngegg.png";
import { Box } from "@mui/material";

const SpotifySongCard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "400px",
          height: "150px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <img
          src={pic}
          alt="Spotify Logo"
          style={{
            width: "150px",
            height: "150px",
            marginRight: "10px",
          }}
        />
        <div>
          <h3 style={{ color: "#FFFFFF", marginBottom: "5px" }}>
            Song Title
          </h3>
          <p style={{ color: "#FFFFFF", fontSize: "14px" }}>Artist Name</p>
        </div>
      </div>
    </Box>
  );
};

export default SpotifySongCard;
