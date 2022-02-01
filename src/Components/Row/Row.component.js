import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { generalStyles } from "./Row.styles";
export default function Row(props) {
  const styles = generalStyles();
  const { data, index, switcher } = props;

  return (
    <>
      <Grid
        item
        className={`${
          index % 2 == 0
            ? [switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowText}`}
        xs={2}
      >
        {data.name}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 == 0
            ? [switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowText}`}
        xs={2}
      >
        {data.family}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 == 0
            ? [switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.carbohydrates}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 == 0
            ? [switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.protein}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 == 0
            ? [switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.calories}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 == 0
            ? [switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber}`}
        xs={2}
      >
        {data.nutritions.sugar}
      </Grid>
    </>
  );
}
