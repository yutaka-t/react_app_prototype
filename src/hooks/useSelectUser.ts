import { useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = (props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);
    console.log(`id:${id}`);
    console.log(targetUser);

    // undifind の可能性があるので、その場合はnullを入れる
    setSelectedUser(targetUser ?? null);
  };
  return { onSelectUser, selectedUser };
};
