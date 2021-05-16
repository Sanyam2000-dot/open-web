import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../assets/icons/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navButton: {
    marginLeft: "0.2rem",
  },
  logoImage: {
    width: "200px",
    height: "150px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <img src={logo} alt="" className={classes.logoImage} />
          {/* <Typography variant="h6" className={classes.title}>
            Open Community
          </Typography> */}
          <Button
            className={classes.navButton}
            variant="contained"
            color="primary"
            href="/"
          >
            Home
          </Button>
          <Button
            className={classes.navButton}
            variant="contained"
            color="primary"
            href="/contact"
          >
            Contact Us
          </Button>
          <Button
            className={classes.navButton}
            variant="contained"
            color="primary"
            href="/about"
          >
            About Us
          </Button>
          <Button
            className={classes.navButton}
            variant="contained"
            color="primary"
            href="/projects"
          >
            Projects
          </Button>
          <Button
            className={classes.navButton}
            variant="contained"
            color="primary"
          >
            Register
          </Button>
          <Button
            className={classes.navButton}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
