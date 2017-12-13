import * as React from "react";

import Editor from "./Editor";

interface NoteState {
  title: string;
  body: string;
}

class Note extends React.Component<{}, NoteState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: "initial title",
      body: "# initial body"
    };
  }

  render() {
    return (
      <div>
        Note Component. title: {this.state.title}
        <Editor title={this.state.title} body={this.state.body} />
      </div>
    );
  }
}

export default Note;
