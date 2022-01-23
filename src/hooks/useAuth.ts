import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useHistory } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

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
            // ログインユーザのIDが 10 であれば管理者とみなす
            const isAdmin = res.data.id === 10 ? true : false;

            // isAdmin は、取得したデータにないので追加する
            setLoginUser({ ...res.data, isAdmin });

            showMessage({ title: "ログインしました。", status: "success" });
            history.push("/home");
          } else {
            showMessage({ title: "ユーザが見つかりません。", status: "error" });
            alert("ユーザが見つかりません ※else");
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ユーザが見つかりません。", status: "error" });
          setLoading(false);
        });
      // .finally(() => setLoading(false));
    },
    [history, showMessage, setLoginUser]
  );
  return { login, loading };
};
