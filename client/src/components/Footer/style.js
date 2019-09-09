import jss from "jss";
import preset from "jss-preset-default";

jss.setup(preset());

let footerStyle = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    width: "85%",
    margin: "0 auto",
    marginTop: "231px",
    paddingBottom: "122px"
  },
  footerItem: {
    display: "flex",
    flexDirection: "column"
  },
  footerItemTitle: {
    fontFamily: "Josefin Sans",
    fontSize: "24px",
    lineHeight: "24px",
    marginBottom: "35px"
  },
  footerLink: {
    fontFamily: "Open Sans",
    fontSize: "18px",
    lineHeight: "35px",
    textDecoration: "none",
<<<<<<< HEAD
    color: "#fff"
=======
    color: "#fff",
    "&:hover": {
      textDecoration: "underline"
    }
>>>>>>> d8e2db5bcc88245d8861d3af92dda68701ad5c24
  }
};
export const { classes } = jss.createStyleSheet(footerStyle).attach();
