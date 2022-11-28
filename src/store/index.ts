import {atom, useAtom} from 'jotai';

import {UserSession, OtpSession, TokenSession} from '../@types/list';

import {atomWithMMKV} from './atomWithMMKV';

export const sessionAtom = atomWithMMKV<UserSession | null>('session', null);

export const tokenAtom = atomWithMMKV<TokenSession | null>('token', null);

export const otpAtom = atomWithMMKV<OtpSession | null>('otp', null);

export const otpAtoms = atom<string | null>(null);

export const profileImageAtom = atomWithMMKV<string>('profileImage', '');
