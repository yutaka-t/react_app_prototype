import { useContext } from "react";

import {
  LoginUserContextType,
  LoginUsercontext
} from "../providers/LoginUserProvider";

/**
 * provider のカスタムフック化。カスタムフックの有効な使い方として覚えておく。
 * こうすることで、毎回定義を書かなくても、useLoginUser を呼ぶだけで、
 * グローバル値を取得できるようになる。
 */
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUsercontext);
