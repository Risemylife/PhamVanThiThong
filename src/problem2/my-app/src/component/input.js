import React from "react";
import { Button, Input } from "@mui/material";

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
      >
        Outlined
      </Button>
    </div>
  );
};

export default InputComponent;
