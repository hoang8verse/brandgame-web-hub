import React, { useLayoutEffect, useRef } from "react";

const ARShooterEventGame = () => {
  const iframeRef = useRef(null);
  const getParamFromUrl = (url) => {
    if (url.indexOf("?") > -1) {
      let parts = url.split("?");
      return "?" + parts[1];
    } else {
      return "";
    }
  };
  const param = getParamFromUrl(window.location.href);
  const _src = "https://rlgl2.brandgames.vn/ARShooterEvent/index.html" + param;
  const updateIframeHeight = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const viewportHeight = window.innerHeight;
      const iframeHeight =
        viewportHeight -
        (window.innerHeight - document.documentElement.clientHeight);
      iframe.style.height = `${iframeHeight}px`;
    }
  };

  useLayoutEffect(() => {
    updateIframeHeight();
    window.addEventListener("resize", updateIframeHeight);

    return () => {
      window.removeEventListener("resize", updateIframeHeight);
    };
  }, []);
  const urlBarHeight = 50;
  return (
    <>
      <iframe
        ref={iframeRef}
        src={_src}
        style={{
          width: "100%",
          height: `calc(100vh - ${urlBarHeight}px)`,
          border: "none",
        }}
        allow="camera;accelerometer;gyroscope;magnetometer;"
      ></iframe>
    </>
  );
};

export default ARShooterEventGame;
