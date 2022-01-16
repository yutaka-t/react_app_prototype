import { VFC, memo } from "react";
import { WrapItem, Wrap, Box, Stack, Image, Text } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <Box
            w="260px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
          >
            <Stack textAlign="center">
              {/* @chakra-ui の Image タグである点に注意 */}
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://source.unsplash.com/random"
                alt="プロフィール画像"
                // マージン 中央揃えで設定
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                藤原
              </Text>
              <Text fontSize="sm" color="gray">
                Kakeru Fujiwara
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
});
