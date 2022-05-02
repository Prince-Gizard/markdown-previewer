import React, { useState } from 'react';
import Previewer from '../components/Previewer';
import Editor from '../components/Editor';

export default function App() {
  const [singleWindowMode, setSingleWindowMode] = useState(false);
  const singleWindowStyle = {
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  };

    const [showEditor, setShowEditor] = useState(true);
  const maximizeEditor = () => {
    setShowPreviewer(false);
    setSingleWindowMode(true);
  };
  const minimizeEditor = () => {
    setShowPreviewer(true);
    setSingleWindowMode(false);
  };
  
    const [inputText, setInputText] = useState(placeholder);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

    const [showPreviewer, setShowPreviewer] = useState(true);
  const maximizePreviewer = () => {
    setShowEditor(false);
    setSingleWindowMode(true);
  };
  const minimizePreviewer = () => {
    setShowEditor(true);
    setSingleWindowMode(false);
  };

  return (
    <div className="App" style={singleWindowMode ? singleWindowStyle : null}>
      {showEditor && (
        <Editor
          isMaximized={singleWindowMode}
          inputText={inputText}
          onChange={handleChange}
          onResizeIconClick={singleWindowMode ? minimizeEditor : maximizeEditor}
        />
      )}
      {showPreviewer && (
        <Previewer
          isMaximized={singleWindowMode}
          originalText={inputText}
          onResizeIconClick={singleWindowMode ? minimizePreviewer : maximizePreviewer}
        />
      )}
    </div>
  );
}

const placeholder = 
`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

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

![Pig Logo]( https://img.freepik.com/vector-gratis/ilustracion-vector-diseno-tatuaje-simbolo-cerdo_463676-520.jpg?w=900 )

`
