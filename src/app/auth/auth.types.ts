export interface IRegisterInfos {
  name: string;
  email: string;
  password: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface ILoginResponse {
  email: string;
  password: string;
}
export interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
}
