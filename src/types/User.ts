import { CommonMongoTypes } from "./common";

export type UserType = {
  username: string;
  social: string;
  isLawyer: boolean;
  email: string;
  profileImageUrl: string;
  isDeleted: {
    type: boolean;
    default: false;
  };
  tokenDetails: {
    token: { type: string };
    expiresAt: { type: Date };
  };
  googleMetadata: {
    googleId: string;
    name: string;
    googleFirstName: string;
    googleLastName: string;
    emailVerified: boolean;
    accessToken: string;
    tokenExpiresIn: number;
    tokenIssuedAt: number;
    tokenId: string;
    tokenNotValidBefore: number;
  };
} & CommonMongoTypes;
