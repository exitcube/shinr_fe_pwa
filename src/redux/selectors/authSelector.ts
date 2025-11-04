import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useAuth = () => {
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);

  return { accessToken };
};
