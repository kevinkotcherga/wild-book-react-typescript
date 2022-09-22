export interface IWilder {
  id : number;
  name: string;
  city: string;
  upvote: ISkills[];
  fetchData: () => Promise<void>;
}

export interface ISkills {
  id: number;
  upvote: number;
  skill: ISkill;
}

export interface ISkill {
  id: number;
  name: string;
}
