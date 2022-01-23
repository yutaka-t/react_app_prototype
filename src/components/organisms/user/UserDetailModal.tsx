import { VFC, memo, useState, useEffect, ChangeEvent } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  ModalFooter
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
};

export const UserDetailModal: VFC<Props> = memo((props: Props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;

  const [username, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUserName(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onchangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onchangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onchangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onchangePhone = (e: ChangeEvent<HTMLInputElement>) =>
    setPhone(e.target.value);

  console.log(user);
  const onClickUpdate = () => {
    alert("onClickUpdate!!!!!");
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent pb={2}>
        <ModalHeader>ユーザ詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mg={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onchangeUsername}
                isReadOnly={!isAdmin}
              />
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={onchangeName}
                isReadOnly={!isAdmin}
              />
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={onchangeEmail}
                isReadOnly={!isAdmin}
              />
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onchangePhone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {/* isAdminがtrueの時のみボタン表示 */}
        {isAdmin && (
          <ModalFooter>
            <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
