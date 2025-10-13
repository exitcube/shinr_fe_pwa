import { useSelector } from "react-redux";

export const useAuth = () => {
  const deviceUUId = useSelector((state: any) => state.auth.deviceUUId);
  return { deviceUUId };
};
