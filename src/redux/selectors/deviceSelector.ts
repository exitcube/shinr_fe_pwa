import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useDevice = () => {
  const deviceUUId = useSelector((state: RootState) => state.device.deviceUUId);
  return { deviceUUId };
};
