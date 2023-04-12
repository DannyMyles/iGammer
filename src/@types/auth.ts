export interface User {
  fullname: string;
  lastname: string;
  email: string;
  birthdate: string;
  gender: string;
  username: string;
  password: string;
}

export interface AuthUser extends User {
  id: number;
  accessToken: string;
  role: string;
}

export interface AuthState {
    user: AuthUser | null;
    accessToken: string | null;
    error: string | null;
}

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
  status: number;
  data: AuthUser;
  message: string;
  error: boolean;
}

export interface SignupResponse extends LoginResponse {}
export interface SignupRequest extends User {}

