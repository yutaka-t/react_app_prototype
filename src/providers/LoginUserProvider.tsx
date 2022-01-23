import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

/**
 * No.10 のユーザを疑似的に管理者とする。
 * Userに　新しい型(isAdmin)を追加
 */
type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};

export const LoginUsercontext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    /**
     * 今回は、loginUser, setLoginUser　を一つのprovider でまとめているが、
     * loginUserを参照、更新両方で再レタリングが走らせたくなければ、これをわけること。
     */
    <LoginUsercontext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUsercontext.Provider>
  );
};
