import React, {useState} from 'react'

export const useUpdateImage = () => {
    const [isUpdateHeroImageEnabled, setIsUpdateHeroImageEnabled] =
      useState(false);
    const [isHideImage, setIsHideImage] = useState(false);

  const handleEnableHeroImageUpdateClick = () =>
    setIsUpdateHeroImageEnabled(true);
  const handleDisableHeroImageUpdateClick = () => setIsHideImage(true);
  const handleResetToPreviousStepClick = () => setIsHideImage(false);
  return {isHideImage, isUpdateHeroImageEnabled, handleEnableHeroImageUpdateClick, handleDisableHeroImageUpdateClick, handleResetToPreviousStepClick};
}

