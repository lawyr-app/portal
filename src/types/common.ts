export type MayBe<T> = T | undefined | null;

export type MongoTimeStampTypes = {
  createdAt: Date;
  updatedAt: Date;
};

export type MongoId = {
  _id: String;
};

export type CommonMongoTypes = MongoId & MongoTimeStampTypes;

export type MaybeEmptyArray<T> = T[] | [];
