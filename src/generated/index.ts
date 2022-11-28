import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {fetcherWithAuth} from '../services/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type BodyShapeInput = {
  ankle: Scalars['Float'];
  arms: Scalars['Float'];
  belly: Scalars['Float'];
  breast: Scalars['Float'];
  breastImportance?: InputMaybe<Scalars['String']>;
  butt: Scalars['Float'];
  calf: Scalars['Float'];
  height: Scalars['Float'];
  hip: Scalars['Float'];
  knees: Scalars['Float'];
  legs: Scalars['Float'];
  neck: Scalars['Float'];
  neckImportance?: InputMaybe<Scalars['String']>;
  shoulders: Scalars['Float'];
  waist: Scalars['Float'];
};

export type BodyShapeModel = {
  _id: Scalars['ID'];
  ankle: Scalars['Float'];
  arms: Scalars['Float'];
  belly: Scalars['Float'];
  breast: Scalars['Float'];
  breastImportance?: Maybe<Scalars['String']>;
  butt: Scalars['Float'];
  calf: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  height: Scalars['Float'];
  hip: Scalars['Float'];
  knees: Scalars['Float'];
  legs: Scalars['Float'];
  neck: Scalars['Float'];
  neckImportance?: Maybe<Scalars['String']>;
  shoulders: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
  waist: Scalars['Float'];
};

export type BrandModel = {
  _id: Scalars['ID'];
  brandName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  imageUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BrandPagination = {
  data: Array<BrandModel>;
  meta: PageMetaDto;
};

export type CategoryModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  subCategory: SubCategoryPageModel;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryPagination = {
  data: Array<CategoryModel>;
  meta: PageMetaDto;
};

export type ClothPatternModel = {
  _id: Scalars['ID'];
  clothName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  imageUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ClothPatternPagination = {
  data: Array<ClothPatternModel>;
  meta: PageMetaDto;
};

export type ColorPaletteModel = {
  _id: Scalars['ID'];
  colorName: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  imageUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ColorPalettePagination = {
  data: Array<ColorPaletteModel>;
  meta: PageMetaDto;
};

export type CreateCategoryInput = {
  title: Scalars['String'];
};

export type CreateDataPrivacyInput = {
  name: Scalars['String'];
};

export type CreateSeasonInput = {
  name: Scalars['String'];
};

export type CreateSubCategoryInput = {
  categoryId: Scalars['String'];
  subTitle: Scalars['String'];
};

export type DataPrivacyModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DataPrivacyPagination = {
  data: Array<DataPrivacyModel>;
  meta: PageMetaDto;
};

export type DressCodeModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  dressTitle: Scalars['String'];
  imageUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DressCodePagination = {
  data: Array<DressCodeModel>;
  meta: PageMetaDto;
};

export type EyeColorModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  eyeColorName: Scalars['String'];
  imageUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type EyeColorPagination = {
  data: Array<EyeColorModel>;
  meta: PageMetaDto;
};

export type HairColorModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  hairColorName: Scalars['String'];
  imageUrl: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type HairColorPagination = {
  data: Array<HairColorModel>;
  meta: PageMetaDto;
};

export type LoginUserInput = {
  countryCode: Scalars['String'];
  deviceOS: Scalars['String'];
  deviceToken: Scalars['String'];
  deviceType: Scalars['String'];
  deviceVersion: Scalars['String'];
  mobileNo: Scalars['String'];
  prefix: Scalars['String'];
  termsCondition?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  createBrand: BrandModel;
  createCategory: CategoryModel;
  createClothPattern: ClothPatternModel;
  createColorPalette: ColorPaletteModel;
  createDataPrivacy: DataPrivacyModel;
  createDressCode: DressCodeModel;
  createEyeColor: EyeColorModel;
  createHairColor: HairColorModel;
  createSeason: SeasonModel;
  createSkinColor: SkinColorModel;
  createStyle: StyleModel;
  createSubCategory: SubCategoryModel;
  login: UserModel;
  logout: Scalars['Boolean'];
  refreshToken: SessionModel;
  removeBrand: BrandModel;
  removeCategory: CategoryModel;
  removeClothPattern: ClothPatternModel;
  removeColorPalette: ColorPaletteModel;
  removeDataPrivacy: DataPrivacyModel;
  removeDressCode: DressCodeModel;
  removeEyeColor: EyeColorModel;
  removeHairColor: HairColorModel;
  removeSeason: SeasonModel;
  removeSkinColor: SkinColorModel;
  removeStyle: StyleModel;
  removeSubCategory: SubCategoryModel;
  updateBodyShape: BodyShapeModel;
  updateBrand: BrandModel;
  updateCategory: CategoryModel;
  updateClothPattern: ClothPatternModel;
  updateColorPalette: ColorPaletteModel;
  updateDataPrivacy: DataPrivacyModel;
  updateDressCode: DressCodeModel;
  updateEyeColor: EyeColorModel;
  updateHairColor: HairColorModel;
  updateProfile: UserModel;
  updateSeason: SeasonModel;
  updateSkinColor: SkinColorModel;
  updateStyle: StyleModel;
  updateSubCategory: SubCategoryModel;
  updateUserDetails: UserModel;
  verifyOtp: SessionModel;
};

export type MutationCreateBrandArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};

export type MutationCreateClothPatternArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateColorPaletteArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateDataPrivacyArgs = {
  createDataPrivacyInput: CreateDataPrivacyInput;
};

export type MutationCreateDressCodeArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateEyeColorArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateHairColorArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateSeasonArgs = {
  createSeasonInput: CreateSeasonInput;
};

export type MutationCreateSkinColorArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateStyleArgs = {
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationCreateSubCategoryArgs = {
  createSubCategoryInput: CreateSubCategoryInput;
};

export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};

export type MutationRemoveBrandArgs = {
  id: Scalars['String'];
};

export type MutationRemoveCategoryArgs = {
  id: Scalars['String'];
};

export type MutationRemoveClothPatternArgs = {
  id: Scalars['String'];
};

export type MutationRemoveColorPaletteArgs = {
  id: Scalars['String'];
};

export type MutationRemoveDataPrivacyArgs = {
  id: Scalars['String'];
};

export type MutationRemoveDressCodeArgs = {
  id: Scalars['String'];
};

export type MutationRemoveEyeColorArgs = {
  id: Scalars['String'];
};

export type MutationRemoveHairColorArgs = {
  id: Scalars['String'];
};

export type MutationRemoveSeasonArgs = {
  id: Scalars['String'];
};

export type MutationRemoveSkinColorArgs = {
  id: Scalars['String'];
};

export type MutationRemoveStyleArgs = {
  id: Scalars['String'];
};

export type MutationRemoveSubCategoryArgs = {
  id: Scalars['String'];
};

export type MutationUpdateBodyShapeArgs = {
  bodyShapeInput: BodyShapeInput;
  id: Scalars['String'];
};

export type MutationUpdateBrandArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateCategoryArgs = {
  id: Scalars['String'];
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationUpdateClothPatternArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateColorPaletteArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateDataPrivacyArgs = {
  id: Scalars['String'];
  updateDataPrivacyInput: UpdateDataPrivacyInput;
};

export type MutationUpdateDressCodeArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateEyeColorArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateHairColorArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateProfileArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
};

export type MutationUpdateSeasonArgs = {
  id: Scalars['String'];
  updateSeasonInput: UpdateSeasonInput;
};

export type MutationUpdateSkinColorArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateStyleArgs = {
  id: Scalars['String'];
  image: Scalars['Upload'];
  name: Scalars['String'];
};

export type MutationUpdateSubCategoryArgs = {
  id: Scalars['String'];
  updateSubCategoryInput: UpdateSubCategoryInput;
};

export type MutationUpdateUserDetailsArgs = {
  id: Scalars['String'];
  updateUserInput: UpdateUserInput;
};

export type MutationVerifyOtpArgs = {
  verifyOtpInput: VerifyOtpInput;
};

export type PageMetaDto = {
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Float'];
  limit: Scalars['Float'];
  page: Scalars['Float'];
  pageCount: Scalars['Float'];
};

export type PageOptionsDto = {
  limit?: InputMaybe<Scalars['Float']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  getAllBrands: BrandPagination;
  getAllCategories: CategoryPagination;
  getAllClothPatterns: ClothPatternPagination;
  getAllColorPalettes: ColorPalettePagination;
  getAllDataPrivacy: DataPrivacyPagination;
  getAllDressCode: DressCodePagination;
  getAllEyeColors: EyeColorPagination;
  getAllHairColors: HairColorPagination;
  getAllSeason: SeasonPagination;
  getAllSkinColors: SkinColorPagination;
  getAllStyles: StylePagination;
  getAllSubCategories: SubCategoryPagination;
  getBrand: BrandModel;
  getCategory: CategoryModel;
  getClothPattern: ClothPatternModel;
  getColorPalette: ColorPaletteModel;
  getDataPrivacy: DataPrivacyModel;
  getDressCode: DressCodeModel;
  getEyeColor: EyeColorModel;
  getHairColor: HairColorModel;
  getSeason: SeasonModel;
  getSkinColor: SkinColorModel;
  getStyle: StyleModel;
  getSubCategory: SubCategoryModel;
};

export type QueryGetAllBrandsArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllCategoriesArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllClothPatternsArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllColorPalettesArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllDataPrivacyArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllDressCodeArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllEyeColorsArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllHairColorsArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllSeasonArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllSkinColorsArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllStylesArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetAllSubCategoriesArgs = {
  pageOptionsDto: PageOptionsDto;
};

export type QueryGetBrandArgs = {
  id: Scalars['String'];
};

export type QueryGetCategoryArgs = {
  id: Scalars['String'];
};

export type QueryGetClothPatternArgs = {
  id: Scalars['String'];
};

export type QueryGetColorPaletteArgs = {
  id: Scalars['String'];
};

export type QueryGetDataPrivacyArgs = {
  id: Scalars['String'];
};

export type QueryGetDressCodeArgs = {
  id: Scalars['String'];
};

export type QueryGetEyeColorArgs = {
  id: Scalars['String'];
};

export type QueryGetHairColorArgs = {
  id: Scalars['String'];
};

export type QueryGetSeasonArgs = {
  id: Scalars['String'];
};

export type QueryGetSkinColorArgs = {
  id: Scalars['String'];
};

export type QueryGetStyleArgs = {
  id: Scalars['String'];
};

export type QueryGetSubCategoryArgs = {
  id: Scalars['String'];
};

export type SeasonModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SeasonPagination = {
  data: Array<SeasonModel>;
  meta: PageMetaDto;
};

export type SessionModel = {
  _id: Scalars['ID'];
  accessToken?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  deviceOS: Scalars['String'];
  deviceToken?: Maybe<Scalars['String']>;
  deviceType: Scalars['String'];
  deviceVersion: Scalars['String'];
  loggedIn: Scalars['DateTime'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type SkinColorModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  imageUrl: Scalars['String'];
  skinColorName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SkinColorPagination = {
  data: Array<SkinColorModel>;
  meta: PageMetaDto;
};

export type StyleModel = {
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  imageUrl: Scalars['String'];
  styleName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type StylePagination = {
  data: Array<StyleModel>;
  meta: PageMetaDto;
};

export type SubCategoryModel = {
  _id: Scalars['ID'];
  category: CategoryModel;
  categoryId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  subTitle: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type SubCategoryPageModel = {
  data: Array<SubCategoryModel>;
  totalCount: Scalars['Int'];
};

export type SubCategoryPagination = {
  data: Array<SubCategoryModel>;
  meta: PageMetaDto;
};

export type UpdateCategoryInput = {
  title: Scalars['String'];
};

export type UpdateDataPrivacyInput = {
  name: Scalars['String'];
};

export type UpdateSeasonInput = {
  name: Scalars['String'];
};

export type UpdateSubCategoryInput = {
  categoryId: Scalars['String'];
  subTitle: Scalars['String'];
};

export type UpdateUserInput = {
  address?: InputMaybe<Scalars['String']>;
  allowlocation?: InputMaybe<Scalars['Boolean']>;
  birthDate?: InputMaybe<Scalars['DateTime']>;
  brandIds?: InputMaybe<Array<Scalars['String']>>;
  clothPatternIds?: InputMaybe<Array<Scalars['String']>>;
  colorPaletteIds?: InputMaybe<Array<Scalars['String']>>;
  country?: InputMaybe<Scalars['String']>;
  dislikeStyleIds?: InputMaybe<Array<Scalars['String']>>;
  dressCodeId?: InputMaybe<Scalars['String']>;
  eyeColorId?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  hairColorId?: InputMaybe<Scalars['String']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  likeStyleIds?: InputMaybe<Array<Scalars['String']>>;
  lng?: InputMaybe<Scalars['Float']>;
  nationality?: InputMaybe<Scalars['String']>;
  skinColorId?: InputMaybe<Scalars['String']>;
  sustainability?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['Float']>;
};

export type UserModel = {
  _id: Scalars['ID'];
  address?: Maybe<Scalars['String']>;
  allowlocation?: Maybe<Scalars['Boolean']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  bodyShape?: Maybe<BodyShapeModel>;
  brandIds?: Maybe<Array<Scalars['String']>>;
  clothPatternIds?: Maybe<Array<Scalars['String']>>;
  colorPaletteIds?: Maybe<Array<Scalars['String']>>;
  country?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  deviceOS: Scalars['String'];
  deviceToken: Scalars['String'];
  deviceType: Scalars['String'];
  deviceVersion: Scalars['String'];
  dislikeStyleIds?: Maybe<Array<Scalars['String']>>;
  dressCodeId?: Maybe<Scalars['String']>;
  eyeColorId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hairColorId?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  likeStyleIds?: Maybe<Array<Scalars['String']>>;
  lng?: Maybe<Scalars['String']>;
  mobileNo: Scalars['String'];
  nationality?: Maybe<Scalars['String']>;
  otp: Scalars['String'];
  otpTimeInterval: Scalars['DateTime'];
  prefix: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
  skinColorId?: Maybe<Scalars['String']>;
  sustainability?: Maybe<Scalars['String']>;
  termsCondition: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['String']>;
};

export type VerifyOtpInput = {
  countryCode: Scalars['String'];
  mobileNo: Scalars['String'];
  otp: Scalars['String'];
  prefix: Scalars['String'];
};

export type MutationMutationVariables = Exact<{
  loginUserInput: LoginUserInput;
}>;

export type MutationMutation = {
  login: {
    prefix: string;
    mobileNo: string;
    deviceOS: string;
    deviceType: string;
    countryCode: string;
    country?: string | null;
    _id: string;
    otp: string;
  };
};

export type VerifyOtpMutationMutationVariables = Exact<{
  verifyOtpInput: VerifyOtpInput;
}>;

export type VerifyOtpMutationMutation = {
  verifyOtp: {
    userId: string;
    accessToken?: string | null;
    _id: string;
    loggedIn: any;
    createdAt: any;
  };
};

export const MutationDocument = `
    mutation Mutation($loginUserInput: LoginUserInput!) {
  login(loginUserInput: $loginUserInput) {
    prefix
    mobileNo
    deviceOS
    deviceType
    countryCode
    country
    _id
    otp
  }
}
    `;
export const useMutationMutation = <
  TError =
    | {
        code: string;
        extra: any;
        locations: {column: number; line: number}[];
        message: string;
        metadata: any;
        path: string[];
        status_code: number;
      }
    | string
    | number,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    MutationMutation,
    TError,
    MutationMutationVariables,
    TContext
  >,
) =>
  useMutation<MutationMutation, TError, MutationMutationVariables, TContext>(
    ['Mutation'],
    fetcherWithAuth<MutationMutation, MutationMutationVariables>(
      MutationDocument,
    ),
    options,
  );
export const VerifyOtpMutationDocument = `
    mutation VerifyOtpMutation($verifyOtpInput: VerifyOtpInput!) {
  verifyOtp(verifyOtpInput: $verifyOtpInput) {
    userId
    accessToken
    _id
    loggedIn
    createdAt
  }
}
    `;
export const useVerifyOtpMutationMutation = <
  TError =
    | {
        code: string;
        extra: any;
        locations: {column: number; line: number}[];
        message: string;
        metadata: any;
        path: string[];
        status_code: number;
      }
    | string
    | number,
  TContext = unknown,
>(
  options?: UseMutationOptions<
    VerifyOtpMutationMutation,
    TError,
    VerifyOtpMutationMutationVariables,
    TContext
  >,
) =>
  useMutation<
    VerifyOtpMutationMutation,
    TError,
    VerifyOtpMutationMutationVariables,
    TContext
  >(
    ['VerifyOtpMutation'],
    fetcherWithAuth<
      VerifyOtpMutationMutation,
      VerifyOtpMutationMutationVariables
    >(VerifyOtpMutationDocument),
    options,
  );
