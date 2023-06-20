import React, {useRef, useEffect ,useState} from 'react';

const LuckyMouseGame = () => {

  const iframeRef = useRef(null);
  const onReceivedMsg = (e) => {
    e.preventDefault();
    console.log("onReceivedMsg ================   ", e);
    let _data = JSON.parse(e.data);
    console.log(" iframeRef.current.contentWindow.parent new ====================:     ", iframeRef.current.contentWindow.parent);
    console.log('we have message sending here --- ', window.parent);
    // let event = temp["event"];
    // let data = temp["data"];
    // console.log("onReceivedMsg ======  ", event, data);
    // iframeRef.current.contentWindow.postMessage(e.data, '*');
    iframeRef.current.contentWindow.parent.postMessage(e.data, 'https://zalo.me/');
    // if (window && window.parent) {
    //   window.parent.postMessage(e.data, '*');
    // }
  
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
  const param =  getParamFromUrl(window.location.href);
  const _src = "https://rlgl2.brandgames.vn/LuckyMouse/index.html" + param;
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

export default LuckyMouseGame;
