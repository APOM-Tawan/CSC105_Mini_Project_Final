import React from "react";
import disk from "../image/pngegg.png";
import { Box } from "@mui/material";

const MusicCard = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center',width: "200px", height: "250px",bottom:"20px",}}>
      <Box sx={{ maxWidth: 'fit-content',marginLeft:10,marginRight:10,}}>
        <img
          style={{
            width: '500%',
            display: 'block',
            margin: '0,20px,',
          }}
          src={disk}
          alt="Background Image"
        />
        <Box>
          <div className="content" style={{ textAlign: "center" }}>
            <h2>Text</h2>
            <p>Sub-text</p>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicCard;
