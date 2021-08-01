import { useToast } from "@chakra-ui/react"
import { useCallback } from "react"

type Props = {
  title: string
  status: "success" | "error"
}

// トーストメッセージを表示するカスタムフック
export const useMessage = () => {
  const toast = useToast()

  const showMessage = useCallback((props: Props) => {
    const { title, status } = props
    toast({
      title: title,
      status: status,
      duration: 9000,
      isClosable: true
    })
  }, [toast])

  return { showMessage }
}