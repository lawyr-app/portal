import { CommonMongoTypes } from "./common";

export type UserType = {
  username: String;
  social: String;
  isLawyer: Boolean;
  googleId: String;
  name: String;
  googleFirstName: String;
  googleLastName: String;
  profileImageUrl: String;
  email: String;
  emailVerified: Boolean;
  accessToken: String;
  tokenExpiresIn: Number;
  tokenIssuedAt: Number;
  tokenId: String;
  tokenNotValidBefore: Number;
} & CommonMongoTypes;
