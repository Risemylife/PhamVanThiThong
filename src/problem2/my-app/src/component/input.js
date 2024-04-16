import React from "react";
import { Avatar, Button, Input } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const InputComponent = (name) => {
  return (
    <div className="input-container">
      <Input
        fullWidth={true}
        disableUnderline={true}
        name={name}
        className="materialInput"
      />
      <Button
        disableRipple={true}
        disableElevation={true}
        className="materialBtn"
        startIcon={<Avatar sx={{ width: 30, height: 30 }} alt="Remy Sharp" />}
      >
        USD <ExpandMoreIcon />
      </Button>
    </div>
  );
};

export default InputComponent;
