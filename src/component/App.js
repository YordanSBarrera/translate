import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange(idioma) {
    this.setState({ language: idioma });
    console.log(this.state.language, idioma);
  }
  render() {
    return (
      <div className="ui container" style={{ backgroundColor: "Highlight" }}>
        <div>
          Selecciona un Idioma:
          <i
            className="flag us"
            onClick={() => {
              this.onLanguageChange("english");
            }}
          />
          <i
            className="flag cu"
            onClick={() => {
              this.onLanguageChange("spanish");
            }}
          />
          <i
            className="flag nl"
            onClick={() => {
              this.onLanguageChange("dutch");
            }}
          />
        </div>
        <br />
        <UserCreate />
        <button className="ui primary button">OK</button>
      </div>
    );
  }
}

export default App;
