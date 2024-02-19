import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LoginStyles = styled(Box)({
  ".loginButton": {
    background: "#F88634",
    width: "100%",
    padding: "8px 0px 8px 0px",
    border: "2px solid #F88634",
    borderRadius: "24px",
    backgroundColor: "white",
    color: "#F88634",
    "&:hover": {
      backgroundColor: "#f88634",
      color: "white",
    },
  },
  ".container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "30vw",
  },
  ".addForm": {
    width: "100%",
    maxWidth: "380px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto auto 0 auto",
    alignSelf: "end",
    ".formLabelStyling": {
      color: "gray",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
      width: "100%",
    },
    ".inputfield": { marginBottom: "20px", width: "100%" },
    ".form-input": {
      ".MuiInputBase-root": {
        height: "40px",
      },
    },
  },
  ".privacy_policy": {
    position: "relative",
    alignSelf: "end",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "20px",
    margin: "auto auto 0 auto",
  },
  ".no-decoration": {
    textDecoration: "none",
    color: "#414141",
    fontSize: "14px",
  },
  ".text-color": {
    color: "#414141",
    fontSize: "14px",
    ".no-decoration": {
      color: "#2B64B1",
    },
  },
  ".title_page": {
    color: " #414141",
    opacity: "1",
    fontWeight: "500",
  },
  ".description_page": {
    fontSize: "smaller",
    margin: "10px 0px 30px 0px",
  },
  ".linkstyle": {
    marginTop: "10px",
  },
  ".content": {
    display: "flex",
  },
});
