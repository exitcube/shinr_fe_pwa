import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuth = () => {
  const deviceUUId = useSelector((state: RootState) => state.auth.deviceUUId);
  return { deviceUUId };
};
