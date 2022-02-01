import React from 'react';
import { Grid } from '@mui/material';
import { generalStyles } from './Row.styles';
import Dimensions from '../../utils/dimensions';

export default function Row(props) {
  const styles = generalStyles();
  const { data, index, switcher } = props;
  const { width } = Dimensions();

  return (
    <>
      <Grid
        item
        className={`${
          index % 2 === 0
            ? [!switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [!switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowText} ${width < 600 && styles.font10}`}
        xs={2}
      >
        {data.name}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 === 0
            ? [!switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [!switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowText} ${
          width < 600 ? styles.font10 : styles.font13
        }`}
        xs={2}
      >
        {data.family}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 === 0
            ? [!switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [!switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber} ${
          width < 600 ? styles.font10 : styles.font13
        }`}
        xs={2}
      >
        {data.nutritions.fat}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 === 0
            ? [!switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [!switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber} ${
          width < 600 ? styles.font10 : styles.font13
        }`}
        xs={2}
      >
        {data.nutritions.protein}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 === 0
            ? [!switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [!switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber} ${
          width < 600 ? styles.font10 : styles.font13
        }`}
        xs={2}
      >
        {data.nutritions.calories}
      </Grid>
      <Grid
        item
        className={`${
          index % 2 === 0
            ? [!switcher ? styles.rowWhite : styles.rowDarkGrey]
            : [!switcher ? styles.rowGrey : styles.rowBlack]
        } ${styles.row} ${styles.rowNumber} ${
          width < 600 ? styles.font10 : styles.font13
        }`}
        xs={2}
      >
        {data.nutritions.sugar}
      </Grid>
    </>
  );
}
