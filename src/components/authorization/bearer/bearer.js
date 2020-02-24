import React from "react";

class Bearer extends React.Component {
  render() {
    return (
      <div>
        <h3>Bearer Token</h3>
        <form>
          <input
            id="bearer"
            onChange={this.props.onChange}
            type="text"
            className="wide"
            name="token"
            placeholder="Token"
            value={this.props.value}
          />
        </form>
      </div>
    );
  }
}

export default Bearer;
