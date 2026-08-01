import { AUTH_TOKEN_COOKIE } from "@/constant/localKeys";

export { AUTH_TOKEN_COOKIE };

export const AUTH_TOKEN_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function setAuthCookie(token: string) {
  document.cookie = `${AUTH_TOKEN_COOKIE}=${encodeURIComponent(
    token
  )}; path=/; max-age=${AUTH_TOKEN_MAX_AGE}; SameSite=Lax`;
}

export function clearAuthCookie() {
  document.cookie = `${AUTH_TOKEN_COOKIE}=; path=/; max-age=0`;
}

export function getAuthTokenFromCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${AUTH_TOKEN_COOKIE}=([^;]*)`)
  );
  return match ? decodeURIComponent(match[1]) : null;
}
