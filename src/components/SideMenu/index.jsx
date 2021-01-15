import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { Button, Hidden, IconButton, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

export const SideMenu = ({ classes, handleClickOpen }) => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} color="primary">
            <TwitterIcon color="primary" className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <TurnedInNotIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PersonOutlineIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetutton}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
      </li>
    </ul>
  );
};
