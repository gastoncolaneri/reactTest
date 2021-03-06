import { makeStyles } from '@mui/styles';
import { colors } from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  ml20: { marginLeft: 20 },
  ml1: { marginLeft: 1 },
  titleGrey: {
    color: colors.GREY,
  },
  titleDarkGrey: {
    color: colors.DARKGREY,
  },
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
