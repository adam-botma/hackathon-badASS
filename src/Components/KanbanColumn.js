import React from "react";
import CardModal from "./CardModal";
import EditIcon from "@material-ui/icons/Edit";

export default function KanbanColumn(props) {
  return (
    <div className="column">
      <div className="column-name-container">
        <div className="column-name">
          <h2>{props.name}</h2>
          <div className="edit-column-name">
            <EditIcon />
          </div>
        </div>
      </div>
      <div className="column-contents">
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
        <CardModal />
      </div>
    </div>
  );
}
