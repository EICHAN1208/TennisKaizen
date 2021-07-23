import { Flex, Input, Stack, useToast } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const AddCategory = () => {
  const history = useHistory()
  const toast = useToast();

  const onClickAddCategory = () => {
    history.push("/chart")
    toast({
      title: "カテゴリを追加しました。",
      status: "success",
      duration: 9000,
      isClosable: true
    })
  }

  return (
    <>
      <Flex align="center" justify="center">
        <Stack spacing={6}>
          <p>チャートに含めるカテゴリーを追加する</p>
          <Input
            placeholder="カテゴリ"
            size="md"
          />
          <PrimaryButton onClick={onClickAddCategory}>
            追加
          </PrimaryButton>
        </Stack>
      </Flex>
    </>
  )
}