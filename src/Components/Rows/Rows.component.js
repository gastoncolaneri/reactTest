import React from 'react';
import TextRow from './TextRow/TextRow.component';
import NumberRow from './NumberRow/NumberRow.component';

export default function Row(props) {
  const { data, index, switcher } = props;

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
