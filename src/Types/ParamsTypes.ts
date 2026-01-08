export interface GeneralParams {
  page: number;
  limit: number;
  hidden: boolean;
}

export interface SkillParams extends GeneralParams {
  category?: string;
}
export interface ProjectsParams extends GeneralParams {
  highlight?: boolean
}