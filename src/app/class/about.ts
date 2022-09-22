export class About {
  presentation: string;
  first_experience: string;
  first_experience_link: string;
  second_experience: string;
  second_experience_link: string;
  description: string;
  first_skills: string[];
  second_skills: string[];
  third_skills: string[];
  constructor(
    presentation: string,
    first_experience: string,
    first_experience_link: string,
    second_experience: string,
    second_experience_link: string,
    description: string,
    first_skills: string[],
    second_skills: string[],
    third_skills: string[]
  ) {
    this.presentation = presentation;
    this.first_experience = first_experience;
    this.first_experience_link = first_experience_link;
    this.second_experience = second_experience;
    this.second_experience_link = second_experience_link;
    this.description = description;
    this.first_skills = first_skills;
    this.second_skills = second_skills;
    this.third_skills = third_skills;
  }
}
