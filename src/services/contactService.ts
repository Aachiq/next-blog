import { API_URL } from "@/config/constants";

export interface IContactInfo {
  fullname: string;
  email: string;
  phone: string;
  message: string;
  nationality: string;
}
export const sendContactMessageService = async (data: IContactInfo) => {
  console.log("data :", data);
  const response = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to send contact message");
  }

  return response.json();
};
