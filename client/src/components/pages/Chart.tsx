import { useHistory } from "react-router"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { Graph } from "../atoms/graph/Graph"

export const Chart = () => {
  const history = useHistory()
  const onClickRecord = () => {
    history.push("/new_record")
  }

  const onClickAddCategory = () => {
    history.push("/new_category")
  }

  return (
    <>
    <p>チャートの画面</p>
    <Graph />
    <PrimaryButton
      onClick={onClickRecord}
    >
      記録する
    </PrimaryButton>
    <PrimaryButton
      onClick={onClickAddCategory}
    >
      カテゴリ追加
    </PrimaryButton>
  </>
  )
}