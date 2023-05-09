import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        <p>이름 : {name}</p>
        <p>좋아하는 숫자 : {favoriteNumber}</p>
        <p>자식 props : {children}</p>
      </div>
    );
  }
}

export default MyComponent;
