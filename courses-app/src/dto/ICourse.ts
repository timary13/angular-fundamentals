export interface ICourse {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];
}

export class Course {
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: string[];

  constructor(course: ICourse | null) {
    this.title = course?.title || '';
    this.description = course?.description || '';
    this.creationDate = course?.creationDate || '';
    this.duration = course?.duration || 0;
    this.authors = course?.authors || [];
  }
}
