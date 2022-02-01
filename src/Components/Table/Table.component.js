import React, { useEffect, useState } from 'react';
import { generalStyles } from './Table.styles';
import { Grid } from '@mui/material';
import Row from '../Row/Row.component';
import ApiRequest from '../../Services/api';
import Loader from '../Loader/Loader.component';
import Dimensions from '../../utils/dimensions';

export default function Table(props) {
  const { switcher } = props;
  const styles = generalStyles();
  const header = ['Name', 'Family', 'Fat', 'Protein', 'Calories', 'Sugar'];

  const [dataFetch, setDataFetch] = useState([]);
  const [openLoader, setOpenLoader] = useState(false);
  const { width } = Dimensions();

  useEffect(() => {
    setOpenLoader(true);
    ApiRequest().then((resp) => {
      setDataFetch(resp);
      setOpenLoader(false);
    });
  }, []);

  return (
    <Grid
      container
      className={`${styles.table} ${width < 600 ? styles.p1 : styles.p20}`}
    >
      {header.map((title, index) => {
        return (
          <>
            <Grid
              item
              className={`${
                index < 2 ? styles.headerLeft : styles.headerCenter
              } ${width < 600 ? styles.header14 : styles.header18} ${
                styles.header
              }`}
              xs={2}
              key={index}
            >
              {title}
            </Grid>
          </>
        );
      })}
      {dataFetch.map((data, index) => {
        return <Row data={data} index={index} switcher={switcher} />;
      })}
      <Loader open={openLoader} />
    </Grid>
  );
}
