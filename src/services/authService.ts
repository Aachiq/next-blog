import {
  ILoginPayload,
  ILoginResponse,
  IRegisterInfos,
} from "@/app/auth/auth.types";
import { API_URL } from "@/config/constants";
import { IcommonResponseType } from "@/utils/common.types";

export const userRegisterService = async (data: IRegisterInfos) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
};

export const userLoginService = async (
  data: ILoginPayload
): Promise<ILoginResponse> => {
  const response = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  return response.json();
};

export const userLogoutService = async (): Promise<IcommonResponseType> => {
  const response = await fetch(`${API_URL}/auth/signout`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // this allow send token automatically
  });

  if (!response.ok) {
    throw new Error("Failed to logout user");
  }

  return response.json();
};
