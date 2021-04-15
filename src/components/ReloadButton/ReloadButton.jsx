import React from 'react';
import './ReloadButton.css';
const ReloadButton = ({ clickHandler }) => {
  return (
    <div className="reload-button" onClick={() => clickHandler()}>
      <p className="reload-button-text">Reload</p>
    </div>
  );
};

export default ReloadButton;
