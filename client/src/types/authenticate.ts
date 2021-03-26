import IAuthForm from "types/state";

export interface IAuthenticate extends IAuthForm {
  /** Тип авторизации. */
  type: string;
}
