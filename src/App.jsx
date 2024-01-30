import React from 'react';
import './App.css';
import ReactMarkdown from "react-markdown";
import {FaFreeCodeCamp} from "react-icons/fa"
const defaultMarkdown=`# Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.`;

        
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      markdownText:defaultMarkdown
    };
    this.handleInputChange=this.handleInputChange.bind(this);
  }
  handleInputChange(event){
    this.setState({markdownText:event.target.value});
  }
  render(){
      return(
      <>
      <div className='textbox'>
         <h3 className='toolbar'><FaFreeCodeCamp className="icon" style={{color:"black"}}></FaFreeCodeCamp> Editor</h3>
        <textarea  id="editor" value={this.state.markdownText} onChange={this.handleInputChange}></textarea>
      </div>
      <div id="preview">
        <ReactMarkdown>{this.state.markdownText}</ReactMarkdown>
      </div>
      </>
      )
      
    }
  }
export default App
