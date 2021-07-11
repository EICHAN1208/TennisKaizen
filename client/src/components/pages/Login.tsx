import { Button } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

export const Login = () => {
  const history = useHistory();

  const onClickLogin = () => {
    history.push("/chart")
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