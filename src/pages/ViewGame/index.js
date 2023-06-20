import React, { useEffect, useState } from 'react';
// import index from 'SnakeLadder/index.html'

function iframe() {
  return {
      __html: '<iframe src="./SnakeLadder/index.html" width="100%" height="1000"></iframe>'
  }
}

const ViewGame = () => {
const [showEl,setShowEl] = useState(false)

useEffect(() => {
  setTimeout(() => {

    setShowEl(true)
  },3000)

},[] )
  return (
    <>
       <div className={`${showEl ? 'block' : 'hidden'}`} dangerouslySetInnerHTML={iframe()}></div>
    </>
  );
};

export default ViewGame;
