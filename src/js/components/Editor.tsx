import * as React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

import { extraKeys } from "../keymap";

require("codemirror/mode/markdown/markdown");
require("codemirror/addon/edit/continuelist");

export default class Editor extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      value: "# initial value"
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
        Editor Component
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
