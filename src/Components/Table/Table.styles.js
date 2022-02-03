import { makeStyles } from '@mui/styles';
import { colors } from '../../utils/colors';

export const generalStyles = makeStyles((theme) => ({
  table: {
    padding: 30,
    textAlign: 'center',
  },
  p20: {
    padding: 20,
  },
  p1: {
    padding: 1,
  },
  header: {
    fontSize: 18,
    backgroundColor: colors.DARKGREY,
    color: colors.WHITE,
    paddingLeft: 5,
  },
  header14: {
    fontSize: 14,
    fontWeight: 500,
  },
  header18: {
    fontWeight: 700,
  },
  headerLeft: {
    textAlign: 'left',
  },
  headerCenter: {
    textAlign: 'center',
  },
}));
