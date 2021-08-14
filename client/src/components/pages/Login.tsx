import { useState } from "react";
import { useHistory } from "react-router-dom"
import { Input, Stack } from "@chakra-ui/react"
import axios from "axios"

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useMessage } from "../../hooks/useMessage";

// nameじゃなくて、passwordにしたい
type UserType = {
  email: string;
  name: string;
}

export const Login = () => {
  const history = useHistory();
  const { showMessage } = useMessage();

  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  // 入力があるたびにuserEmailに値がセットされる
  const onChangeUserEmail = (e: any) => setUserEmail(e.target.value);
  const onChangeUserPassword = (e: any) => setUserPassword(e.target.value);

  const onClickLogin = () => {
    axios.get<Array<UserType>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      const auth = () => {
        if ((res.data[0].name === userPassword) && (res.data[0].email === userEmail)) {
          return true;
        } else {
          return false;
        }
      }
      const authResult = auth();

      if(authResult) {
        history.push("/chart")
        showMessage({ title: "ログインしました。", status: "success" })
      } else {
        showMessage({ title: "認証に失敗しました。", status: "error" })
      }
    }).catch(() => alert())
  };

  return (
    <>
      <p>ログイン画面</p>
      <Stack>
        <Input
          placeholder="email"
          size="md"
          onChange={onChangeUserEmail} />
        <Input
          placeholder="password"
          size="md"
          onChange={onChangeUserPassword} />
      </Stack>
      <PrimaryButton
        onClick={onClickLogin}
      >
        ログイン
      </PrimaryButton>
    </>
  )
}