import React from 'react';
import { generalStyles } from './Table.styles';
import { Grid } from '@mui/material';

const header = ['', 'Player', 'Age', 'Nationality', 'Position', 'Team'];

const player = [
  'foto',
  'Neymar',
  '34',
  'Brazilian',
  'Attacker',
  'Paris Saint Germain',
];

export default function Table() {
  const styles = generalStyles();
  return (
    <Grid container xs={12} className={styles.table}>
      {header.map((title) => {
        return (
          <>
            <Grid item className={styles.header} xs={2}>
              {title}
            </Grid>
          </>
        );
      })}
      {player.map((title) => {
        return (
          <>
            <Grid item xs={2} className={styles.row}>
              {title}
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}
