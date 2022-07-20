import React from "react";
import {Heading} from "@chakra-ui/layout";
import {Box} from "@chakra-ui/react";

const WidgetHeader = ({h1, h2, type = 1, ...props}) => {
  return (
    <Box {...props}>
      <Heading as={`h1`} size={`md`}>{h1}</Heading>
      <Heading as={`h2`}
               fontFamily={`AvenirNext`}
               size={`xs`}
               mt={`0.4rem`}
               color={type === 1 ? `tertiary.800` : `tertiary.600`}>
        {h2}
      </Heading>
    </Box>
  )
}

export default WidgetHeader