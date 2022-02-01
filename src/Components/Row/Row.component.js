import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { generalStyles } from "./Row.styles";
export default function Row(props) {
  const styles = generalStyles();
  const { data, index } = props;

  return (
    <>
      <Grid
        item
        className={`${
          parseInt(index) % 2 == 0 ? styles.rowWhite : styles.rowGrey
        } ${styles.row} ${styles.rowText}`}
        xs={2}
      >
        {data.name}
      </Grid>
      <Grid
        item
        className={`${
          parseInt(index) % 2 == 0 ? styles.rowWhite : styles.rowGrey
        } ${styles.row} ${styles.rowText}`}
        xs={2}
      >
        {data.family}
      </Grid>
      <Grid
        item
        className={`${
          parseInt(index) % 2 == 0 ? styles.rowWhite : styles.rowGrey
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.carbohydrates}
      </Grid>
      <Grid
        item
        className={`${
          parseInt(index) % 2 == 0 ? styles.rowWhite : styles.rowGrey
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.protein}
      </Grid>
      <Grid
        item
        className={`${
          parseInt(index) % 2 == 0 ? styles.rowWhite : styles.rowGrey
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.calories}
      </Grid>
      <Grid
        item
        className={`${
          parseInt(index) % 2 == 0 ? styles.rowWhite : styles.rowGrey
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.sugar}
      </Grid>
    </>
  );
}
