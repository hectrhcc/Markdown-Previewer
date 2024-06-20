import React from 'react';
import ReactDOM from 'react-dom';
import './Estilo.css';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};


const contenido =`# Welcome to my React Markdown Previewer!

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
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


class Textos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: contenido 
    } 
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({
      input:event.target.value
    });
  }

  render() {
    const entrada = this.state.input;
    return (
      <>
       <div className="editor"><h4 style={{margin:"0px", backgroundColor:"#4AA3A3", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.5)", borderBottom: "1px solid black", padding: "5px"}}>Editor</h4>
        <textarea className="textarea"  id="editor"  onChange={this.handleChange} value={this.state.input}/>
      </div>
 <Post propiedad={this.state.input} />
        </>
    );
  }
};



const Post = (props) => {
  
  return (
    <div className="previsual"> 
    <h4 style={{margin:"0px", backgroundColor:"#4AA3A3", boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.5)", borderBottom: "1px solid black", padding: "5px"}}>Previewer</h4>
    <div dangerouslySetInnerHTML={{
      __html: marked(props.propiedad, { renderer: renderer })
    }}
      id="preview" />
      </div>
  );
}
ReactDOM.render(<Textos  />, document.getElementById('root'));