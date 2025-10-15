import { AxiosError } from "axios";

export const handleAxiosError = (
  err: unknown,
  defaultMessage = "Something went wrong"
) => {
  if (err instanceof AxiosError) {
    return err.response?.data?.message || defaultMessage;
  } else if (err instanceof Error) {
    return err.message || defaultMessage;
  }
  return defaultMessage;
};
