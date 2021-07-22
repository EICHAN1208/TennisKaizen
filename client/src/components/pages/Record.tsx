import { useHistory } from "react-router-dom"

import { PrimaryButton } from "../atoms/button/PrimaryButton"

export const Record = () => {
  const history = useHistory()
  const onClickDisplayChart = () => {
    history.push("/chart")
  }

  return (
    <>
      <p>悪かったところを記録する画面</p>
      <PrimaryButton
        onClick={onClickDisplayChart}
      >
        完了
      </PrimaryButton>
    </>
  )
}