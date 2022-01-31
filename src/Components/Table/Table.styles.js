import { makeStyles } from '@mui/styles';

export const generalStyles = makeStyles((theme) => ({
  table: {
    boxShadow: ' 0px 0px 10px #000',
    padding: 10,
    textAlign: 'center',
  },
  header: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 30,
    fontWeight: 700,
    backgroundColor: 'lightgrey',
  },
  row: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    fontWeight: 300,
    backgroundColor: 'aliceblue',
  },
}));
