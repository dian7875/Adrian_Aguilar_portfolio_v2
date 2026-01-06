import axiosInstance from "../services/AxiosIstance";
import { handleAxiosError } from "./handleAxiosError";

export async function axiosGet<T>(
  url: string,
  params?: Record<string, any>
): Promise<T> {
  try {
    const res = await axiosInstance.get<T>(url, { params });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}
