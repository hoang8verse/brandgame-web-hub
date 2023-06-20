import React, { useEffect ,useState} from 'react';

import { Routes, Route, useLocation } from 'react-router-dom';
import RLGLGame from './pages/RLGLGame';
import PartyMatchGame from './pages/PartyMatchGame';
import LuckyMouseGame from './pages/LuckyMouseGame';
import ARShooterGame from './pages/ARShooterGame';
import FlappyBirdGame from './pages/FlappyBirdGame';
import ARShooterEventGame from './pages/ARShooterEventGame';

const getGameIdFromUrl = (url) => {
  if (url.indexOf("?") > -1) {
    let parts = url.split("?");
    if (parts[1].indexOf("gameId") > -1) {
      let urlParams = parts[1].split("&");
      let value;
      urlParams.forEach((param) => {
        let keyValue = param.split("=");
        let key = keyValue[0];
        if (key == "gameId") {
          if (value == "") {
            value = "";
          } else {
            value = keyValue[1];
          }
        }
      });
      return value;
    } else {
      return "";
    }
  } else {
    return "";
  }
};
export default function AppRoutes() {

  const [element, setElement] = useState();
  const location = useLocation();
  useEffect(() => {
    const gameId =  getGameIdFromUrl(window.location.href);
    // if(location.search.length > 0 && location.search.startsWith("?gameId="))\
    if(gameId != "")
    {
      // let gameId =  location.search.slice(8);
      console.log("location search gameId -----===   " , gameId)
      if(gameId === "rlgl"){
        setElement(<RLGLGame />)
      } 
      else if(gameId === "partymatch"){
        setElement(<PartyMatchGame />)
      }
      else if(gameId === "luckymouse"){
        setElement(<LuckyMouseGame />)
      }
      else if(gameId === "arshooter"){
        setElement(<ARShooterGame />)
      }
      else if(gameId === "pangohop"){
        setElement(<FlappyBirdGame />)
      }
      else if(gameId === "arshooter_event"){
        setElement(<ARShooterEventGame />)
      }
    }
    else {
      setElement(<RLGLGame />)
    }
      
  }, [setElement]);

  return (
    <Routes>
      <Route path={``} element={element} />
      {/* <Route path={`/rlgl-game`} element={<RLGLGame />} />
      <Route path={`/party-match-game`} element={<PartyMatchGame />} />
      <Route path={`/lucky-mouse-game`} element={<LuckyMouseGame />} />
      <Route path={`/ar-shooter-game`} element={<ARShooterGame />} />
      <Route path={`/flappy-bird-game`} element={<FlappyBirdGame />} /> */}

      {/* <Route path="*" element={<RLGLGame />} /> */}
    </Routes>
  );
}
