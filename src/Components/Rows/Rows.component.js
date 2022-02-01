import React from 'react';
import { Grid } from '@mui/material';
import TextRow from './TextRow/TextRow.component';
import { generalStyles } from './Rows.styles';
import Dimensions from '../../utils/dimensions';
import NumberRow from './NumberRow/NumberRow.component';

export default function Row(props) {
  const styles = generalStyles();
  const { data, index, switcher } = props;
  const { width } = Dimensions();

  return (
    <>
      <TextRow index={index} switcher={switcher}>
        {data.name}
      </TextRow>
      <TextRow index={index} switcher={switcher}>
        {data.family}
      </TextRow>
      <NumberRow index={index} switcher={switcher}>
        {data.nutritions.fat}
      </NumberRow>
      <NumberRow index={index} switcher={switcher}>
        {data.nutritions.protein}
      </NumberRow>
      <NumberRow index={index} switcher={switcher}>
        {data.nutritions.calories}
      </NumberRow>
      <NumberRow index={index} switcher={switcher}>
        {data.nutritions.sugar}
      </NumberRow>
    </>
  );
}
