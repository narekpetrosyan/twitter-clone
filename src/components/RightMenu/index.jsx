import React from "react";
import {
  withStyles,
  createStyles,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../store/tags/actionCreators";
import { Theme } from "./Theme/Theme";
import { TagLoader } from "./../Loaders/TagLoader";
import { Link } from "react-router-dom";

const rightMenuStyles = makeStyles((theme) => ({
  rightMenu: {
    position: "sticky",
    top: 25,
  },
  rightMenuActuals: {
    marginTop: 40,
    backgroundColor: "#E6ECF0",
    borderRadius: 13,
    paddingTop: "5px",
    paddingBottom: "5px",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  rightMenuActualsHead: {
    fontWeight: "800",
    borderBottom: "1px solid black",
    margin: "10px 0 12px 0",
    paddingLeft: 15,
  },
  rightMenuActual: {
    padding: "5px 15px",
    borderBottom: "1px solid black",
    marginTop: 7,
    marginBottom: 5,
    "& p": {
      fontWeight: "bold",
    },
  },
  rightMenuRead: {
    marginTop: 40,
    backgroundColor: "#E6ECF0",
    borderRadius: 13,
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  rightMenuReadHead: {
    fontWeight: "800",
    borderBottom: "1px solid black",
    margin: "10px 0 12px 0",
    paddingLeft: 15,
  },
  rightMenuReadItem: {
    padding: "5px 15px",
    borderBottom: "1px solid black",
    marginTop: 7,
    marginBottom: 5,
    display: "flex",
    justifyContent: "space-between",
    "& div": {
      display: "flex",
      flexDirection: "column",
      "& p": {
        fontWeight: 800,
      },
    },
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#E6ECF0",
      height: 45,
      padding: "5px 10px",
    },
  })
)(InputBase);

export const RightMenu = () => {
  const classes = rightMenuStyles();

  const dispatch = useDispatch();

  const tags = useSelector((state) => state.tags.items);
  const isLoading = useSelector((state) => state.tags.loadingState);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <div className={classes.rightMenu}>
      <SearchTextField fullWidth placeholder="Поиск в Твиттере" />

      <Paper className={classes.rightMenuActuals}>
        <Typography className={classes.rightMenuActualsHead} variant="h6">
          Актуальные темы
        </Typography>
        {isLoading ? (
          <TagLoader />
        ) : (
          tags.map((tag) => (
            <Link key={tag._id} to={`/home/search?q=${tag.name}`}>
              <Theme {...tag} classes={classes} />
            </Link>
          ))
        )}
      </Paper>

      <Paper className={classes.rightMenuRead}>
        <Typography className={classes.rightMenuReadHead} variant="h6">
          Кого читать?
        </Typography>
        <div className={classes.rightMenuReadItem}>
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt="User avatar"
          />
          <div>
            <p>Group of memes</p>
            <span>@groupOfmemes</span>
          </div>
          <IconButton color="primary">
            <PersonAddIcon />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};
