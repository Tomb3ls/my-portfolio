import React, { Component } from "react";

class UpNav extends Component {
  state = {
    likeCount: 0,
  };

  handleLike = () => {
    this.setState({ likeCount: this.state.likeCount + 1 });
  };

  upnav = {
    color: "white",
    height: "fit-content",
    minHeight: "4vh",
    width: "fit-content",
    paddingRight: "1vw",
    paddingLeft: "1vw",
    borderRadius: "10px",
    margin: "0",

    display: "flex",
    flexDirection: "row",
    gap: "0.5em",
    flexWrap: "wrap",
    alignItems: "center",
  };

  render() {
    return (
      <div className="upnav" style={this.upnav}>
        <div>
          <p>
            like the page?{" "}
            <i className="bi-hand-thumbs-up like" onClick={this.handleLike}></i>
          </p>
        </div>
        <div>
          <p>
            Likes: {this.state.likeCount}
          </p>
        </div>
      </div>
    );
  }
}

export default UpNav;
