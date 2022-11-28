export type FetchContextProps = {
  url: string;
  headers: HeaderProps;
};

export type HeaderProps = {
  'Content-Type': string;
  Authorization?: string;
  role?: string;
};
