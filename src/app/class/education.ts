export class Education {
  title: string;
  institute_link: string;
  institute_text: string;
  period: string;
  descriptions: string[];
  constructor(
    title: string,
    institute_link: string,
    institute_text: string,
    period: string,
    descriptions: string[]
  ) {
    this.title = title;
    this.institute_link = institute_link;
    this.institute_text = institute_text;
    this.period = period;
    this.descriptions = descriptions;
  }
}
