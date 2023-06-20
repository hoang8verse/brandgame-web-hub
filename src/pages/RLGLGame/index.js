import React, {useRef, useEffect ,useState} from 'react';

const RLGLGame = () => {
  const iframeRef = useRef(null);

  const onReceivedMsg = (e) => {
    e.preventDefault();
    console.log("onReceivedMsg ================   ", e);
    let _data = JSON.parse(e.data);
    console.log(" iframeRef.current.contentWindow.parent new :    ", iframeRef.current.contentWindow.parent);
    console.log('we have message sending here', window.parent);
    // let event = temp["event"];
    // let data = temp["data"];
    // console.log("onReceivedMsg ======  ", event, data);
    // iframeRef.current.contentWindow.parent.postMessage(e.data, '*');
    if (window && window.parent) {
      window.parent.postMessage(e.data, 'https://zalo.me/');
    }
  
    // handleSendMessage();
  };
  useEffect(() => {
    window.addEventListener("message", onReceivedMsg);
    // Don't forget to remove addEventListener
    return () => window.removeEventListener('message', onReceivedMsg)
    // handleSendMessage();
  }, []);

  const getParamFromUrl = (url) => {
    if (url.indexOf("?") > -1) {
      let parts = url.split("?");
      return "?"+ parts[1]
     
      } else {
        return "";
      }
  };
  const handleSendMessage = () => {
    // const param =  getParamFromUrl(window.location.href);
    const message = { 
      type: 'paramUrl',
      payload: window.location.href
    };
    iframeRef.current.contentWindow.postMessage(message, '*');
  };

  const param =  getParamFromUrl(window.location.href);
  const _src = "https://rlgl2.brandgames.vn/SquidGame/index.html" + param;

  return (
    <div>
      <iframe
      ref={iframeRef}
      src={_src}
      style={{ width: '100%', height: '100vh', border: 'none' }}
      
    />
    </div>
  );
  
};

export default RLGLGame;
