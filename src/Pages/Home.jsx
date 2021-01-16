import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  Container,
  makeStyles,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import { Tweet } from "./../components/Tweet/Index";
import { SideMenu } from "./../components/SideMenu/index";
import { RightMenu } from "./../components/RightMenu/index";
import { DialogAddTweet } from "./../components/SideMenu/DialogAddTweet";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../store/tweets/actionCreators";
import { TweetLoader } from "./../components/Loaders/TweetLoader";
import { Route, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { FullTweet } from "./components/FullTweet";
import { AddTweetForm } from "../components/AddTweetForm/AddTweetForm";

const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "15px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "sticky",
    top: 0,
  },
  sideMenuListItem: {
    display: "flex",
    alignItems: "center",
    width: 230,
    "& div": {
      height: 50,
      position: "relative",
      left: -10,
      display: "inline-flex",
      alignItems: "center",
      padding: "0 25px 0 20px",
      borderRadius: 30,
      marginBottom: 10,
      cursor: "pointer",
      transition: "background-color 0.15s ease-in-out",
      "&:hover": {
        backgroundColor: "rgba(29,161,242,0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          color: theme.palette.primary.main,
        },
      },
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
    marginLeft: "-5px",
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: 0,
    borderBottom: 0,
  },
  tweetsWrapperHeader: {
    top: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  tweetUserName: {
    color: grey[500],
    marginLeft: 2,
  },

  tweet: {
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "rgb(245,248,250)",
      transition: "all .3s ease-in-out",
      cursor: "pointer",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    display: "flex",
    justifyContent: "space-between",
    width: 450,
  },
  sideMenuTweetutton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  makeTweet: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    padding: "15px 10px",
  },
  tweetTextArea: {
    border: "none",
    outline: "none",
    width: "480px",
    padding: "10px 6px",
    marginLeft: "30px",
    fontSize: "18px",
    color: grey[500],
  },
  makeTweetTop: {
    display: "flex",
    flexWrap: "nowrap",
  },
  makeTweetTopAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  makeTweetBottom: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  makeTweetRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  makeTweetBottomButton: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  circular: {
    marginRight: "15px",
    marginTop: "15px",
  },
  tweetWrapper: {
    textDecoration: "none",
    color: "inherit",
  },
}));

export const Home = () => {
  const classes = useHomeStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.items);
  const isLoading = useSelector((state) => state.tweets.loadingState);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
            classes={classes}
          />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Route path={["/home", "/home/search"]} exact>
              <Paper className={classes.tweetsWrapperHeader} variant="outlined">
                <Typography variant="h6">Главная</Typography>
              </Paper>
            </Route>
            <Route path="/home/tweet">
              <Paper
                className={classes.tweetsWrapperHeader}
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <IconButton color="primary" onClick={() => history.goBack()}>
                  <ArrowBackIcon />
                </IconButton>

                <Typography variant="h6">Твитнуть</Typography>
              </Paper>
            </Route>
            <Route path={["/home", "/home?search?q=:value"]} exact>
              <AddTweetForm classes={classes} />
            </Route>
            <Route path="/home" exact>
              {isLoading ? (
                <TweetLoader />
              ) : (
                tweets.map((tweet) => (
                  <Tweet classes={classes} key={tweet._id} {...tweet} />
                ))
              )}
            </Route>

            <Route path="/home/tweet/:id" exact>
              <FullTweet classes={classes} />
            </Route>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <RightMenu />
        </Grid>
      </Grid>
      <DialogAddTweet handleClose={handleClose} classes={classes} open={open} />
    </Container>
  );
};
