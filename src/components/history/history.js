import React from "react";

/**
 * @class History Component
 * Renders history component of the recent url searches
 */
function History(props) {
  return (
    <div className="history">
      <h2>Recent Search History</h2>
      <ul>
        <li>
          <a href={props.url}>{props.url}</a>
          <button>GET</button>
        </li>
      </ul>
    </div>
  );
}

export default History;
