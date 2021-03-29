import React from "react";
import LanguageContext from "../contexts/LanguagesContext";
class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        <button className="ui button negative">boton</button>
      </div>
    );
  }
}

//Button.contextType=LanguageContext;
export default Button;
