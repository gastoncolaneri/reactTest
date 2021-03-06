import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Table from '../../Components/Table/Table.component';
import { Grid, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Logo from '../../assets/logo.png';
import { generalStyles } from './Home.styles';
import { colors } from '../../utils/colors';
import Dimensions from '../../utils/dimensions';

export default function Home() {
  const styles = generalStyles();
  const [checked, setChecked] = useState(true);
  const { width } = Dimensions();

  return (
    <Grid
      style={{
        backgroundColor: !checked ? colors.WHITE : colors.BLACKDARKMODE,
        padding: width < 400 ? 5 : 10,
        flex: 1,
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        className={styles.titleBox}
        sx={{ marginBottom: 2 }}
      >
        <Avatar alt="Logo" src={Logo} sx={{ width: 70, height: 70 }} />
        <Typography
          variant={width < 600 ? 'h6' : 'h4'}
          className={!checked ? styles.titleDarkGrey : styles.titleGrey}
        >
          FRUIT INFORMATION
        </Typography>
      </Stack>
      <Switch
        checked={checked}
        onChange={() => setChecked(!checked)}
        size="medium"
        className={`${width < 600 ? styles.ml1 : styles.ml20}`}
        sx={{
          overflow: 'visible',
          width: 50,
          height: 18,
          padding: 0,
          marginBottom: 2,
        }}
        color={'warning'}
        icon={
          <DarkModeIcon
            style={{
              color: colors.GREYDARKMODE,
              marginTop: -17,
              fontSize: 35,
              marginLeft: -20,
            }}
          />
        }
        checkedIcon={
          <WbSunnyIcon
            style={{
              color: colors.ORANGE,
              marginTop: -16,
              fontSize: 35,
              marginLeft: 0,
            }}
          />
        }
      />
      <Table switcher={checked} />;
    </Grid>
  );
}
