export interface User {
  _id?: string,
  userName: string,
  password: string,
  repeatePassword?: string,
  email?: string,
  imageUrl?: string,
  isAdmin?: boolean,
};