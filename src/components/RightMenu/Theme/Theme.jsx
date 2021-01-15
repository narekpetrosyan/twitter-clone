import React from "react";

export const Theme = React.memo(({ classes, name, count }) => {
  return (
    <div className={classes.rightMenuActual}>
      <p>{name}</p>
      <span>Твитов։ {count}</span>
    </div>
  );
});
