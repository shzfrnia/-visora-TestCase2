import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://static.tildacdn.com/tild6235-6166-4061-b638-663561653363/visora.svg"
              alt=""
              width="90"
              height="auto"
              className="d-inline-block align-text-top m-r5"
            />
            <span className="m-3">TestCase2</span>
          </a>
        </div>
      </nav>
    );
  }
}
