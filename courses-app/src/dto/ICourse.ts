import { IAuthor } from "./IAuthor";

export interface ICourse {
  id?: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: IAuthor[];
}

export class Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: IAuthor[];

  constructor(course: ICourse | null) {
    this.id = course?.id || '';
    this.title = course?.title || '';
    this.description = course?.description || '';
    this.creationDate = course?.creationDate || '';
    this.duration = course?.duration || 0;
    this.authors = course?.authors || [];
  }
}
