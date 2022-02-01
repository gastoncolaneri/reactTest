import { makeStyles } from "@mui/styles";
import { colors } from "../../utils/colors";
export const generalStyles = makeStyles((theme) => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#fff",

      "& + .MuiSwitch-track": {
        backgroundColor: "#65C466",
      },
    },
  },
}));
