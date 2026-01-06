import type {
  EducationType,
  ExperiencesType,
  LanguageType,
  ProjectType,
  SkillsType,
  SocialNetworkRefType,
  UserType,
} from "../Types";
import type { ApiResponseType } from "../Types/ApiResponseType";
import type { GeneralParams, SkillParams } from "../Types/ParamsTypes";
import { axiosGet } from "../utils/axiosRequest";

export const portfolioService = {
  async getWorkExperiences(params?: GeneralParams) {
    return axiosGet<ApiResponseType<ExperiencesType[]>>("experiences", params);
  },

  async getEducation(params?: GeneralParams) {
    return axiosGet<ApiResponseType<EducationType[]>>(
      "education/by-user",
      params
    );
  },

  async getSocialMedias(params?: GeneralParams) {
    return axiosGet<ApiResponseType<SocialNetworkRefType[]>>(
      "social-medias",
      params
    );
  },

  async getLanguages(params?: GeneralParams) {
    return axiosGet<ApiResponseType<LanguageType[]>>("languages", params);
  },

  async getSkills(params?: SkillParams) {
    return axiosGet<ApiResponseType<SkillsType[]>>("skills", params);
  },

  async getProjects(params?: GeneralParams) {
    return axiosGet<ApiResponseType<ProjectType[]>>("projects", params);
  },

  async getUser() {
    return await axiosGet<UserType>(`users`);
  },

  async getSocialNetwork(name: string) {
    const params = { name: name };
    return await axiosGet<SocialNetworkRefType>(`social-medias/by-name`, params);
  },
};
