"use client";

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width, height}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '100%',
      height: '100%',
      
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;