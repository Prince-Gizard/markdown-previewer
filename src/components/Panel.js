import React from 'react';
import {BsArrowsAngleContract, BsKeyboardFill , BsArrowsAngleExpand} from 'react-icons/bs';

function Toolbar({ isMaximized, label, onResizeIconClick }) {
  return (
    <div className="Toolbar">
      <BsKeyboardFill className="logo" />
      <div className="label"> {label}</div>
      <button className="button" onClick={onResizeIconClick}>
        {isMaximized ? <BsArrowsAngleExpand /> : <BsArrowsAngleContract />}
      </button>
    </div>
  );
}

export default function Panel({ children, ...props }) {
  return (
    <div className="Panel">
      <Toolbar {...props} />
      {children}
    </div>
  );
}

