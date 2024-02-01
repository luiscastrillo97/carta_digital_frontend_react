import { getMeApi } from "@/api/user";

export function useUser() {
  const getMyInfo = async (token: string) => {
    const response = await getMeApi(token);
    return response;
  };
  return { getMyInfo };
}
