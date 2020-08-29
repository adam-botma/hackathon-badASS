import React from "react";
import CardModal from "./CardModal";

export default function KanbanColumn(props) {
  return (
    <div className="column">
      <div className="column-title">
        <h2>{props.name}</h2>
      </div>
      <div className="column-contents">
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
        < CardModal />
      </div>
    </div>
  );
}
