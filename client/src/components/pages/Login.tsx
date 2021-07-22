import { useState } from "react";
import { useHistory } from "react-router-dom"
import { useToast, Input, Stack } from "@chakra-ui/react"
import axios from "axios"

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login = () => {
  const history = useHistory();
  const toast = useToast();

  const [userEmail, setUserEmail] = useState("")

  // 入力があるたびにuserEmailに値がセットされる
  const onChangeUserEmail = (e: any) => setUserEmail(e.target.value)

  const onClickLogin = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      // some関数: 合致するものが一つでもあればtrueを返す
      const authResult = res.data.some(
        (userData: any) => userData.email === userEmail
      )

      if(authResult) {
        history.push("/chart")
        toast({
          title: "ログインしました。",
          description: "今日のテニスはいかがでしたか?",
          status: "success",
          duration: 9000,
          isClosable: true
        })
      } else {
        toast({
          title: "認証に失敗しました。",
          status: "error",
          duration: 9000,
          isClosable: true
        })
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
          onChange={onChangeUserEmail}
        />
        <Input placeholder="password" size="md" />
      </Stack>
      <PrimaryButton
        onClick={onClickLogin}
      >
        ログイン
      </PrimaryButton>
    </>
  )
}