import { Tooltip } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

function TooltipIcon({ text }) {
  return (
    <Tooltip hasArrow bg="teal" label={text} fontSize="xs" padding="15px">
      <InfoOutlineIcon color="gray" cursor="pointer" />
    </Tooltip>
  );
}

export default TooltipIcon;
