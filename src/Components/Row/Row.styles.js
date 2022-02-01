import { makeStyles } from '@mui/styles';
import { colors } from '../../utils/colors';
export const generalStyles = makeStyles((theme) => ({
  row: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    fontWeight: 300,
  },
  rowWhite: {
    backgroundColor: colors.WHITE,
  },
  rowGrey: {
    backgroundColor: colors.GREY,
  },
  rowBlack: {
    backgroundColor: colors.BLACKDARKMODE,
    color: '#fff',
  },
  rowDarkGrey: {
    backgroundColor: colors.GREYDARKMODE,
    color: '#fff',
  },
  rowText: {
    textAlign: 'left',
  },
  rowNumber: {
    textAlign: 'center',
  },
  font10: {
    fontSize: 10,
  },
  font13: {
    fontSize: 13,
  },
}));
