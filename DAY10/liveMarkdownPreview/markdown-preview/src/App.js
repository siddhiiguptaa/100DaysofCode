import './App.css';
import './index.css';
import React,{ useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const [input,setInput] = useState()
  return (
    <div className="App">
      <textarea 
        autoFocus
        className="textarea" 
        value={ input } 
        onChange={ 
          (e) => setInput(e.target.value)
        }
        />
        <ReactMarkdown 
          children= { input } 
          className="markdown"
          components ={{
              code : Component,
              }}/>
    </div>
  )
}



const Component = (value, language) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? " "} {/**Nullish coalescing operator (??)*/}
    </SyntaxHighlighter>
  );
};


export default App;