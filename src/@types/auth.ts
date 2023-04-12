export interface LoginResponse {
  status: number;
  data: User;
  message: string;
  error: boolean;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
//   isLoading: boolean | null;
  error: string | null;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface User {
  id: number;
  fullname: string;
  lastname: string;
  email: string;
  birthdate: string;
  gender: string;
  username: string;
  accessToken: string;
  role: string;
}

