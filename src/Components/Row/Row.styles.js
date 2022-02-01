import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
export const generalStyles = makeStyles((theme) => ({
  row: {
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 300,
  },
  rowWhite: {
    backgroundColor: colors.WHITE,
  },
  rowGrey: {
    backgroundColor: colors.GREY,
  },
  rowText: {
    textAlign: "left",
  },
  rowNumber: {
    textAlign: "center",
  },
}));
