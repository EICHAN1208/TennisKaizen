import { useHistory } from "react-router-dom"
import { useToast } from "@chakra-ui/react"
import { PrimaryButton } from "../atoms/button/PrimaryButton";

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
      <PrimaryButton
        onClick={onClickLogin}
      >
        ログイン
      </PrimaryButton>
    </>
  )
}