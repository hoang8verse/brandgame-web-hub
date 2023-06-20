import React, {useRef, useEffect ,useState} from 'react';

const ARShooterEventGame = () => {
  const iframeRef = useRef(null);
  const getParamFromUrl = (url) => {
    if (url.indexOf("?") > -1) {
      let parts = url.split("?");
      return "?"+ parts[1]
     
      } else {
        return "";
      }
  };
  const param =  getParamFromUrl(window.location.href);
  const _src = "https://rlgl2.brandgames.vn/ARShooterEvent/index.html" + param;
  return (
    <div>
      <iframe
        ref={iframeRef}
        src={_src}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        allow="camera;accelerometer;gyroscope;magnetometer;" > 
      </iframe>
     
    </div>
  );
 
};

export default ARShooterEventGame;
