import {
  Dropdown,
  Option,
  SelectionEvents,
  OptionOnSelectData,
} from "@fluentui/react-components";
import { useNavigate } from 'react-router-dom'

export const HeaderExtra = () => {
  const navigate = useNavigate()

  const onOptionSelect = (_: SelectionEvents, data: OptionOnSelectData) => {
    if (data.optionValue === '1') {
      navigate('/stage/workspace')
    } else {
      navigate('/stage/movies')
    }
  }
  return (
    <Dropdown
      defaultValue="Stage Workspace"
      defaultSelectedOptions={["1"]}
      placeholder="-"
      appearance="underline"
      onOptionSelect={onOptionSelect}
    >
      <Option value="1">Stage Workspace</Option>
      <Option value="2">Movies Center</Option>
    </Dropdown>
  );
}