import DateTimeFormat = Intl.DateTimeFormat;

export class Advertisement{
  Id: number;
  Title: string;
  Description: string;
  Price: string;
  CreationDate: Date;
  Active: boolean;
  CategoryId: number;
  TypeId: number;
  UserId: number;
}
