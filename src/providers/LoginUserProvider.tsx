import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";

import { User } from "../types/api/user";

type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>;
};

const LoginUsercontext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<User | null>(null);
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
