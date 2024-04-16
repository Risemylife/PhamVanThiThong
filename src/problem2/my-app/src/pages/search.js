import React from "react";
import "../style/search.css";
import InputComponent from "../component/input";
import { Button, Grid } from "@mui/material";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

const Search = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid className="search-container" container width="90%">
        <Grid xs={6}>
          <div className="amount">
            Amount to send
            <InputComponent name={"amount"} />
          </div>
        </Grid>
        <Grid xs={1} display="flex" alignItems="center" justifyContent="center">
          <SyncAltIcon
            style={{ transform: "translateY(100%)", cursor: "pointer" }}
          />
        </Grid>
        <Grid
          xs={5}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <div className="receive">
            Amount to receive
            <InputComponent name={"receive"} />
          </div>
        </Grid>
        <Grid xs={6}>
          <div className="exchange-rate">
            1,000 USD = <span className="exchange-rate-receive">25.280</span>{" "}
            VND
          </div>
          <div>Mid-market exchange rate at 18:58</div>
        </Grid>
        <Grid
          xs={6}
          display="flex"
          alignItems="flex-end"
          justifyContent="flex-end"
        >
          <Button
            className="btn-submit"
            variant="outlined"
            disableRipple={true}
            disableElevation={true}
          >
            Swap token
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
