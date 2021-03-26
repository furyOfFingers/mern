export interface IAuthForm {
  /** Почта пользователя. */
  email?: string;
  /** Логин пользователя. */
  login: string;
  /** Пароль пользователя. */
  password: string;
  /** Признак наличия административных прав у пользователя. */
  isAdmin?: boolean;
}

interface IAppState {
  paramPaymentForm: IAuthForm;
  notification: { notification: string };
}

export default IAppState;
