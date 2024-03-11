import React from 'react';
import ReactLoading from 'react-loading';
import './css/style.css';

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-content">
        <ReactLoading type="spin" color="#ffffff" height={100} width={100} />
      </div>
    </div>
  );
};

export default Loading;