import { Divider, Flex, Heading, Box, Input, Stack } from "@chakra-ui/react";
import { VFC, memo, ChangeEvent, useState } from "react";

import { PrimaryButton } from "../../components/atoms/button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

export const Login: VFC = memo(() => {
  const { login, loading } = useAuth();
  const [userId, setUserId] = useState("");

  /**
   * テキストボックスの型指定として、覚えておくこと
   * ChangeEvent<HTMLInputElement>
   */
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => {
    login(userId);
  };

  return (
    <Flex align="cneter" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザID"
            value={userId}
            onChange={onChangeUserId}
          />

          {/* コンポーネントにchildrenを渡している */}
          <PrimaryButton
            disabled={userId === ""}
            isLoading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
