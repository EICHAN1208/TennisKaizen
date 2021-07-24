import { Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"

import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const Record = () => {
  const history = useHistory()
  const onClickDisplayChart = () => {
    history.push("/chart")
  }

  return (
    <>
      <p>「フォアハンド」はどうでしたか?</p>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio colorScheme="green" value="1">
            よかった
          </Radio>
          <Radio colorScheme="green" value="2">
            ふつう
          </Radio>
          <Radio colorScheme="green" value="3">
            わるかった
          </Radio>
        </Stack>
      </RadioGroup>
      <Textarea placeholder="メモ" />
      <PrimaryButton onClick={onClickDisplayChart}>次へ</PrimaryButton>
      <PrimaryButton onClick={onClickDisplayChart}>スキップ</PrimaryButton>
    </>
  )
}