export type UserType = {
  id: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  title: string;
  subTitle: string;
  location: string;
  hostUrl: string;
  photoUrl: string;
  photoPath: string;
  cvUrl: string;
  cvPath: string;
};

export interface Summary {
  experiences: number;
  education: number;
  skills: number;
  projects: number;
  languages: number;
  socialMedias: number;
}