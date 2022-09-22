export class Presentation {
  name: string;
  title: string;
  area: string;
  experience: string;
  description: string;
  constructor(
    name: string,
    title: string,
    area: string,
    experience: string,
    description: string
  ) {
    this.name = name;
    this.title = title;
    this.area = area;
    this.experience = experience;
    this.description = description;
  }
}
