import * as React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import { extraKeys } from "../keymap";

require("codemirror/mode/markdown/markdown");
require("codemirror/addon/edit/continuelist");

interface EditorProps {
  title: string;
  body: string;
}

interface EditorState {
  value: string;
}

class Editor extends React.Component<EditorProps, EditorState> {
  constructor(props: EditorProps) {
    super(props);
    this.state = {
      value: this.props.body
    };
  }

  options = {
    mode: "markdown",
    theme: "3024-day",
    lineNumbers: true,
    extraKeys
  };

  render() {
    return (
      <div>
        <CodeMirror
          value={this.state.value}
          options={this.options}
          onBeforeChange={(editor: any, data: any, value: string) => {
            this.setState({ value });
          }}
          onChange={(editor: any, data: any, value: string) => {}}
        />
      </div>
    );
  }
}

export default Editor;
