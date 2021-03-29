import React from "react";

class Field extends React.Component {
  render() {
    return (
      <div className="ui field" style={{ backgroundColor: "aquamarine" }}>
        <label>Nombre</label>
        <button>field</button>
      </div>
    );
  }
}

export default Field;
