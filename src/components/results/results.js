import React from "react";
import ReactJson from "react-json-view";
/**
 * @function  Results
 * @param  {} props
 * @returns header and response json
 */
function Results(props) {
  return (
    <div id="json">
      <ReactJson name="Headers" enableClipboard={false} src={props.header} />
      <ReactJson name="Response" enableClipboard={false} src={props.response} />
    </div>
  );
}

export default Results;
