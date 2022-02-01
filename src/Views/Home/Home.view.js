import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Table from "../../Components/Table/Table.component";
import { Grid } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { generalStyles } from "./Home.styles";
import CustomSwitcher from "../../Components/CustomSwitcher/CustomSwitcher.component";

export default function Home() {
  const styles = generalStyles();
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked);
  };

  return (
    <Grid style={{ flex: 1, backgroundColor: checked ? "#fff" : "#181818" }}>
      <Switch
        checked={checked}
        onChange={() => setChecked(!checked)}
        size="medium"
        className={styles.switcher}
        color={"warning"}
        icon={
          <DarkModeIcon
            style={{
              color: "#fff",
              marginTop: -8,
              fontSize: 35,
              marginRight: 20,
            }}
          />
        }
        checkedIcon={
          <WbSunnyIcon
            style={{
              color: "#faad35",
              marginTop: -8,
              fontSize: 35,
              marginRight: 20,
            }}
          />
        }
      />
      <Table switcher={checked} />;
    </Grid>
  );
}
