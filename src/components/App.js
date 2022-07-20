import React from "react";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("English")}
          />
          <i
            className="flag nl"
            onClick={() => this.onLanguageChange("Dutch")}
          />
          <i
            className="flag al"
            onClick={() => this.onLanguageChange("Albanian")}
          />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;
