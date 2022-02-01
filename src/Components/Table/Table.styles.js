import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";

export const generalStyles = makeStyles((theme) => ({
  table: {
    boxShadow: " 0px 0px 10px #000",
    padding: 10,
    textAlign: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: 700,
    backgroundColor: colors.ORANGE,
    color: colors.WHITE,
  },
  headerLeft: {
    textAlign: "left",
  },
  headerCenter: {
    textAlign: "center",
  },
}));
