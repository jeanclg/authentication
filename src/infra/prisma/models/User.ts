export interface User {
  createdAt?: Date;
  updatedAt?: Date;
  user_id?: number;
  user_key?: string;
  name?: string | null;
  email: string;
  password: string;
  active?: boolean;
}
