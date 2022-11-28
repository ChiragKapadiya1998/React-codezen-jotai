export type Only<T, U> = {
  [P in keyof T]: T[P];
} & {
  [P in keyof U]?: never;
};

export type Either<T, U> = Only<T, U> | Only<U, T>;

export type TError = {
  code: string;
  extra: any;
  locations: { column: number; line: number }[];
  message: string;
  metadata: any;
  path: string[];
  status_code: number;
};

export type JsonString = string;

export type Complete<T> = {
  [P in keyof Required<T>]: Pick<T, P> extends Required<Pick<T, P>>
    ? T[P]
    : T[P] | undefined;
};

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Maybe<T> = T | null;

export type APIResponse<TData> = {
  data: TData;
  errors: TError;
};
