export interface IAccount {
  username: string;

  password: string;
}

export interface IPermission {
  canCreate: number;
  canRead: number;
  canUpdate: number;
  canDelete: number;
  url: string;
}

export interface IUser {
  name: string;
  email: string;
  phone: string;
  account: IAccount;
  role: string;
  permission: IPermission;
  isDelete: number;
}
