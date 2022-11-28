export type UserSession = {
  provider?: string;
  otp?: string;
};
export type OtpSession = {
  otp?: string;
};

export type TokenSession = {
  token?: string | null;
};
