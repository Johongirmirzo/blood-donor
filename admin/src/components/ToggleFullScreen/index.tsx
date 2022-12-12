import React, { useState } from "react";
import { RxEnterFullScreen } from "react-icons/rx";
import { ToggleFullScreenBtn } from "./index.styled";

const ToggleFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    if (!isFullScreen) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };
  return (
    <ToggleFullScreenBtn onClick={toggleFullScreen}>
      <RxEnterFullScreen />
    </ToggleFullScreenBtn>
  );
};

export default ToggleFullScreen;
