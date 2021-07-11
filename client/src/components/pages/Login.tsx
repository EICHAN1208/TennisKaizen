import { useHistory } from "react-router-dom"
import { Button, useToast } from "@chakra-ui/react"

export const Login = () => {
  const history = useHistory();
  const toast = useToast();

  const onClickLogin = () => {
    history.push("/chart")
    toast({
      title: "ログインしました。",
      description: "今日のテニスはいかがでしたか?",
      status: "success",
      duration: 9000,
      isClosable: true
    })
  };

  return (
    <>
      <p>ログイン画面です</p>
      <Button
        size="md"
        bg="green.300"
        color="white"
        _hover={{ opacity: 0.8 }}
        onClick={onClickLogin}
      >
        ログイン
      </Button>
    </>
  )
}