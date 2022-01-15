import { useToast } from "@chakra-ui/react";
import { useCallback} from "react"

type Props = {
  title: string;
  status: "info" | "warning" | "success" | "error";
}

export const useMessage = () => {
  const toast = useToast()

  const showMessage = useCallback((props: Props) => {
    const {title, status} = props;
    toast({
      title,
      status,
      position: "top",
      // 2秒で消えるように
      duration: 2000, 
      // 閉じれるようにする
      isClosable: true
    })
  }, [toast]);


  return {showMessage}
}