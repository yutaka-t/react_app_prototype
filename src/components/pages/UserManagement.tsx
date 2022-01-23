/* eslint-disable react-hooks/exhaustive-deps */
import { VFC, memo, useEffect, useCallback } from "react";
import {
  WrapItem,
  Wrap,
  Spinner,
  Center,
  useDisclosure
} from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";

import { useLoginUser } from "../../hooks/useLoginUser";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  const { loginUser } = useLoginUser();
  console.log(loginUser);

  const sampleImageUrl = "https://source.unsplash.com/random";

  useEffect(() => {
    getUsers();
  }, []);

  // 指定ユーザを全体から見つけ出してモーダルへ渡す
  const onClikUser = useCallback(
    (id: number) => {
      // key と変数が同じ名前の場合省略可能
      // onSelectUser({ id: id, users: users, onOpen: onOpen });
      onSelectUser({ id, users, onOpen });
    },
    // users に変更がある場合に中身を実行。これがないと初期値で動作してモーダルに何も渡らない
    [users]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl={sampleImageUrl}
                userName={user.name}
                fullName={user.username}
                onClick={onClikUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
