import React from "react";
import "./LoaderLogo.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return <ClimbingBoxLoader size={15} color="#36d7b7" />;
  }
}

export default LogoLoader;
