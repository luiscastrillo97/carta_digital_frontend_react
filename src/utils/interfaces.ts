export interface FormValues {
  email: string;
  password: string;
}

export interface MyInfo {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
}
export interface AuthData {
  token?: string;
  myInfo?: MyInfo | null;
}

export interface IAuthContext {
  auth?: null | AuthData;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

export interface ErrorAPI {
  status: string;
  message: string;
}
