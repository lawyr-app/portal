export type MayBe<T> = T | undefined | null;

export type ValueOf<T> = T[keyof T];

export type MongoTimeStampTypes = {
  createdAt: Date;
  updatedAt: Date;
};

export type MongoId = {
  _id: String;
};

export type CommonMongoTypes = MongoId & MongoTimeStampTypes;

export type MaybeEmptyArray<T> = T[] | [];

export const PAYMENT_STATUS = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  PENDING: "PENDING",
  INITIATED: "INITIATED",
  EXPIRED: "EXPIRED",
  CANCELLED: "CANCELLED",
};
