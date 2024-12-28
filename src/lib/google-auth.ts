import { MayBe } from "./../types/common";
import { jwtDecode } from "jwt-decode";

type googleUserType = {
  sub: number;
  nbf: number;
  exp: number;
  expires_in: number;
  iat: number;
  given_name: string;
  family_name: string;
  picture: string;
  authuser: string;
  name: string;
  scope: string;
  prompt: string;
  token_type: string;
  azp: string;
  aud: string;
  access_token: string;
  email: string;
  jti: string;
  iss: string;
  email_verified: boolean;
};

const getDecodedvalues = (token: string) => {
  const userInfo: MayBe<googleUserType> = jwtDecode(token);
  return {
    googleId: userInfo?.sub,
    name: userInfo?.name,
    googleFirstName: userInfo?.given_name,
    googleLastName: userInfo?.family_name,
    profileImageUrl: userInfo?.picture,
    email: userInfo?.email,
    emailVerified: userInfo?.email_verified,
    accessToken: token,
    tokenExpiresIn: userInfo?.exp,
    tokenIssuedAt: userInfo?.iat,
    tokenId: userInfo?.jti,
    tokenNotValidBefore: userInfo?.nbf,
    ...userInfo,
  };
};

export { getDecodedvalues };
