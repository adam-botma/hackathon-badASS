import React from "react";
import EditIcon from "@material-ui/icons/Edit";

export default function Header() {
  return (
    <header>
      <div className="project-name">
        <h2>BadASS KanBan</h2>
        <div className="edit-project-name">
          <EditIcon />
        </div>
      </div>
    </header>
  );
}
