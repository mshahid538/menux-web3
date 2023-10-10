import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";

export const Icons = ({ item }) => {
  const iconItems = {
    tick: (
      <CheckCircleIcon
        sx={{
          color: "#13BF5B",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
      />
    ),
    cancel: (
      <CancelIcon
        sx={{
          color: "#ED187C",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
      />
    ),
    info: (
      <InfoIcon
        sx={{
          color: "#13BF5B",
          backgroundColor: "black",
          borderRadius: "50%",
        }}
      />
    ),
    empty: (
      <InfoIcon
        sx={{
          color: "#13BF5B",
          backgroundColor: "black",
          borderRadius: "50%",
          visibility: "hidden",
        }}
      />
    ),
  };
  return iconItems[item];
};
