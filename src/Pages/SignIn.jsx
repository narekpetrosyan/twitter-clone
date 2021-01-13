import React from "react";
import {
  Button,
  FormControl,
  FormGroup,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { DialogModalSignIn } from "./../components/DialogModalSignIn/index";
import { DialogModalSignUp } from "./../components/DialogModalSignUp/index";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  blueSide: {
    backgroundColor: "#71C9F8",
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "75%",
    top: "45%",
    transform: "translate(-50%,-50%)",
    width: "150%",
    height: "150%",
  },
  blueSideListInfo: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 380,
    position: "relative",
    "& h6": {
      display: "flex",
      alignItems: "center",
      color: "white",
      fontWeight: 700,
      fintsSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerFormControl: {
    marginBottom: theme.spacing(2),
  },
}));

export const SignIn = () => {
  const classes = useStyles();

  const [visiable, setVisiable] = React.useState(false);
  const [visiableSignUp, setVisiableSignUp] = React.useState(false);

  const handleClickOpen = () => {
    setVisiable(true);
  };

  const handleClose = () => {
    setVisiable(false);
  };

  const handleClickOpenSignUp = () => {
    setVisiableSignUp(true);
  };

  const handleCloseSignUp = () => {
    setVisiableSignUp(false);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Читайте о том, что вам интересно.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} />
              Узнайте, о чем говорят в мире.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon} />
              Присоединяйтесь к общению.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color="primary"
            className={classes.loginSideTwitterIcon}
          />
          <Typography variant="h4" className={classes.loginSideTitle}>
            Узнайте, что происходит в мире прямо сейчас
          </Typography>
          <Typography>
            <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
          </Typography>
          <br />
          <Button
            style={{ marginBottom: 20 }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClickOpenSignUp}
          >
            Зарегистрироваться
          </Button>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            onClick={handleClickOpen}
          >
            Войти
          </Button>

          <DialogModalSignIn
            title="Войти в аккаунт"
            handleClose={handleClose}
            visiable={visiable}
          >
            <FormControl component="fieldset" fullWidth>
              <FormGroup
                className={classes.registerFormControl}
                aria-label="position"
                row
              >
                <TextField
                  autoFocus
                  id="email"
                  label="Адрес электронной почты"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                  fullWidth
                  className={classes.loginSideField}
                />
                <TextField
                  autoFocus
                  id="passwrod"
                  label="Пароль"
                  type="passwrod"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                  fullWidth
                  className={classes.loginSideField}
                />
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                  autoFocus
                  fullWidth
                >
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </DialogModalSignIn>

          <DialogModalSignUp
            title="Создайте учетную запись"
            handleCloseSignUp={handleCloseSignUp}
            visiableSignUp={visiableSignUp}
          >
            <FormControl
              className={classes.registerFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  autoFocus
                  id="name"
                  label="Имя"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                  fullWidth
                  className={classes.loginSideField}
                />
                <TextField
                  autoFocus
                  id="email"
                  label="Email"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                  fullWidth
                  className={classes.loginSideField}
                />
                <TextField
                  autoFocus
                  id="passwrod"
                  label="Пароль"
                  type="passwrod"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                  fullWidth
                  className={classes.loginSideField}
                />
                <Button
                  onClick={handleCloseSignUp}
                  variant="contained"
                  color="primary"
                  autoFocus
                  fullWidth
                >
                  Register
                </Button>
              </FormGroup>
            </FormControl>
          </DialogModalSignUp>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
