export class Experience {
  enterprice: string;
  title: string;
  enterprice_link: string;
  period: string;
  description: string;
  client: string;
  client_link: string;
  importants: string[];
  technologies: string;
  constructor(
    enterprice: string,
    title: string,
    enterprice_link: string,
    period: string,
    description: string,
    client: string,
    client_link: string,
    importants: string[],
    technologies: string
  ) {
    this.enterprice = enterprice;
    this.title = title;
    this.enterprice_link = enterprice_link;
    this.period = period;
    this.description = description;
    this.client = client;
    this.client_link = client_link;
    this.importants = importants;
    this.technologies = technologies;
  }
}
