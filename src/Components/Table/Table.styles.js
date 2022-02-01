import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";

export const generalStyles = makeStyles((theme) => ({
  table: {
    padding: "2%",
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: colors.DARKGREY,
    color: colors.WHITE,
    paddingLeft: 5,
  },
  headerLeft: {
    textAlign: "left",
  },
  headerCenter: {
    textAlign: "center",
  },
}));
