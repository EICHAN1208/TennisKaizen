import { useState, ChangeEvent, ChangeEventHandler } from "react";
import { Radio, RadioGroup, Stack, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { useMessage } from "../../hooks/useMessage";

export const Record = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [checkedValue, setCheckedValue] = useState(1);
  const [text, setText] = useState("");

  const onClickRecordReflection = () => {
    axios.post("http://localhost:3000/daily_reflections", { category_id: checkedValue, text: text }).then((res) => {
      if (res.status === 204) {
        history.push("/chart");
        showMessage({ title: "記録しました。", status: "success" });
        return;
      }
    }).catch(() => {
      showMessage({ title: "記録に失敗しました。", status: "error" });
    });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(Number(e.target.value));
  };
  const onChangeAddText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.target.value);

  return (
    <>
      <p>今日最大の反省ポイント</p>
      <RadioGroup defaultValue="2">
        <Stack spacing={5} direction="row">
          <Radio
            colorScheme="green"
            value="1"
            onChange={handleChange}
            checked={checkedValue === 1}>
            フォアハンド
          </Radio>
          <Radio
            colorScheme="green"
            value="2"
            onChange={handleChange}
            checked={checkedValue === 2}>
            バックハンド
          </Radio>
          <Radio
            colorScheme="green"
            value="3"
            onChange={handleChange}
            checked={checkedValue === 3}>
            スライス
          </Radio>
        </Stack>
      </RadioGroup>
      <Textarea
        placeholder="メモ"
        onChange={onChangeAddText} />
      <PrimaryButton onClick={onClickRecordReflection}>入力完了</PrimaryButton>
    </>
  );
};

// Record your greatest reflections.
// 最大の反省点を記録する