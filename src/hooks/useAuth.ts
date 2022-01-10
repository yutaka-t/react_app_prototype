import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../api/user";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  /**
   * point1:
   *  基本形をuseCallbackで囲んでいる
   *  const login = ()=>{};
   *    ↓
   *  const login = useCallback(()=>{});
   *
   * Point2:
   * 最後に メイン処理やStateを返すのを忘れないこと。
   */
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            history.push("/home");
          } else {
            alert("ユーザが見つかりません ※else");
          }
        })
        .catch(() => alert("ユーザが見つかりません ※catch"))
        .finally(() => setLoading(false));
    },
    [history]
  );
  return { login, loading };
};
