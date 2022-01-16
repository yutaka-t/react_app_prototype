import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

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
            showMessage({ title: "ログインしました。", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザが見つかりません。", status: "error" });
            alert("ユーザが見つかりません ※else");
          }
        })
        .catch(() =>
          showMessage({ title: "ユーザが見つかりません。", status: "error" })
        )
        .finally(() => setLoading(false));
    },
    [history, showMessage]
  );
  return { login, loading };
};
