import React, { useEffect, useState } from "react";
import { generalStyles } from "./Table.styles";
import { Grid } from "@mui/material";
import Row from "../Row/Row.component";
import ApiRequest from "../../Services/api";

const header = [
  "Name",
  "Family",
  "Carbohydrates",
  "Protein",
  "Calories",
  "Sugar",
];

export default function Table() {
  const styles = generalStyles();
  const [dataFetch, setDataFetch] = useState([]);

  useEffect(() => {
    ApiRequest().then((resp) => {
      setDataFetch(resp);
    });
  }, []);

  return (
    <Grid container className={styles.table}>
      {header.map((title, index) => {
        return (
          <>
            <Grid
              item
              className={`${
                index < 2 ? styles.headerLeft : styles.headerCenter
              } ${styles.header}`}
              xs={2}
              key={index}
            >
              {title}
            </Grid>
          </>
        );
      })}
      {dataFetch.map((data, index) => {
        return <Row data={data} index={index} />;
      })}
    </Grid>
  );
}
