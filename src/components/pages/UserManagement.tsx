/* eslint-disable react-hooks/exhaustive-deps */
import { VFC, memo, useEffect } from "react";
import { WrapItem, Wrap, Spinner, Center } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { getUsers, users, loading } = useAllUsers();

  const sampleImageUrl = "https://source.unsplash.com/random";

  useEffect(() => {
    getUsers();
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
            <WrapItem key={user.id}>
              <UserCard
                imageUrl={sampleImageUrl}
                userName={user.name}
                fullName={user.username}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
});
