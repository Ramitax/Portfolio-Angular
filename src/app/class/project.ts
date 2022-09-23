export class Project {
  title: string;
  year: string;
  link: string;
  description: string;
  technologies: string;
  constructor(
    title: string,
    year: string,
    link: string,
    description: string,
    technologies: string
  ) {
    this.title = title;
    this.year = year;
    this.link = link;
    this.description = description;
    this.technologies = technologies;
  }
}
