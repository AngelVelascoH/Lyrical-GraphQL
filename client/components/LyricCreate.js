import React, { Component } from "react";
import mutation from "../queries/addLyrics";
import { graphql } from "react-apollo";
class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId,
      },
    });
    this.setState({ content: "" });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}
export default graphql(mutation)(LyricCreate);
