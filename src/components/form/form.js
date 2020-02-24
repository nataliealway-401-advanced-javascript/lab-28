import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.callAPI}>
      <section>
        <input
          type="text"
          className="wide"
          name="url"
          placeholder="url"
          onChange={props.handleMethods}
        />
        <div id="methods" onChange={props.handleMethods}>
          <label>
            <input type="radio" name="method" value="get" />
            <span>GET</span>
          </label>
          <label>
            <input type="radio" name="method" value="post" />
            <span>POST</span>
          </label>
          <label>
            <input type="radio" name="method" value="put" />
            <span>PUT</span>
          </label>
          <label>
            <input type="radio" name="method" value="patch" />
            <span>PATCH</span>
          </label>
          <label>
            <input type="radio" name="method" value="delete" />
            <span>DELETE</span>
          </label>
          <label>
            <button type="submit">Go!</button>
          </label>
        </div>
      </section>
      <section className="deck col-2">
        <div id="body">
          <textarea
            placeholder="Raw JSON Body"
            name="requestBody"
            onChange={props.handleMethods}
          />
        </div>
      </section>
    </form>
  );
}

export default Form;
