import { useEffect } from "react";

interface MobileDetectionProps {
  onDetectMobile: (isMobile: boolean) => void;
}

const MobileDetection: React.FC<MobileDetectionProps> = ({
  onDetectMobile,
}) => {
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent =
        navigator.userAgent || navigator.vendor || (window as any).opera;

      if (
        /android/i.test(userAgent) ||
        (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream)
      ) {
        onDetectMobile(true);
      } else {
        onDetectMobile(false);
      }
    };

    checkIfMobile();
  }, [onDetectMobile]);

  return null;
};

export default MobileDetection;
