import { useState, memo } from "react"
import { Flex, Input, Stack, Text } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import axios from "axios"

import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useMessage } from "../../hooks/useMessage"

export const AddCategory = memo(() => {
  const history = useHistory()
  const { showMessage } = useMessage()
  const [category, setCategory] = useState<string>("")
  const onChangeAddCategory = (e: any) => setCategory(e.target.value)

  const onClickAddCategory = () => {
    if(category === "") {
      showMessage({ title: "カテゴリを入力してください。", status: "error" })
      return
    }

    axios.post("http://localhost:3000/categories", { name: category }).then((res) => {
      if(res.status === 204) {
        history.push("/chart")
        showMessage({ title: "カテゴリ追加しました。", status: "success" })
        return
      }
    }).catch(() => {
      showMessage({ title: "カテゴリ追加に失敗しました。", status: "error" })
    })
  }

  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Stack spacing={6}>
          <Text fontSize="3xl">カテゴリ追加</Text>
          <Input
            placeholder="カテゴリ"
            focusBorderColor="green.300"
            size="md"
            onChange={onChangeAddCategory}
          />
          <PrimaryButton onClick={onClickAddCategory}>
            追加
          </PrimaryButton>
        </Stack>
      </Flex>
    </>
  )
})