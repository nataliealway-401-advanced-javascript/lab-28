import React from "react";
import "../auth.scss";

class BasicAuth extends React.Component {
  render() {
    return (
      <>
        <div id="basicAuth">
          <h3>Basic Auth</h3>
          <form className="auth">
            <input
              id="username"
              onChange={this.props.onChange}
              name="username"
              placeholder="Username"
              value={this.props.value}
            />
            <input
              id="password"
              onChange={this.props.onChange}
              name="password"
              type="password"
              placeholder="Password"
              value={this.props.value}
            />
          </form>
        </div>
      </>
    );
  }
}

export default BasicAuth;
