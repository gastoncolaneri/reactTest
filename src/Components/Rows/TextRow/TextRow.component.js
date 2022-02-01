import React from 'react';
import { Grid } from '@mui/material';
import { generalStyles } from '../Rows.styles';
import Dimensions from '../../../utils/dimensions';

export default function TextRow(props) {
  const styles = generalStyles();
  const { index, switcher, children } = props;
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
        {children}
      </Grid>
    </>
  );
}
