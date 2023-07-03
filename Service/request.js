import http from "./http";

export function signUp(data) {
  return http.post(`/signuptrainee`, data);
}

export function signIn(data) {
  return http.post(`/login`, data);
}

export function logout(data) {
  return http.post(`/logout`, data);
}

export function forgotPassword(data) {
  return http.post(`/auth/change_password`, data);
}

