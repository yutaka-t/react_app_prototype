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

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();

  const sampleImageUrl = "https://source.unsplash.com/random";

  useEffect(() => {
    getUsers();
  }, []);

  const onClikUser = useCallback((id: number) => {
    onSelectUser({ id: id, users: users });
    onOpen();
  }, []);

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
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
