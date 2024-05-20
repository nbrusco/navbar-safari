import { IBranch } from "#/interfaces/IBranch";
import { IUser } from "#/interfaces/IUser";

export interface ProtectedRouteProps {
  branch: IBranch | null;
  redirectPath?: string;
}

export interface PublicRouteProps {
  user: IUser | null;
  redirectPath?: string;
}