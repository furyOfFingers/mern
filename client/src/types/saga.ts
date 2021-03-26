import { Action } from "redux";
import { IAuthenticate } from "types/authenticate";

export interface IAuthenticatePayload extends Action {
  payload?: IAuthenticate;
}
