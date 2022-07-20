import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {Box, Flex} from "@chakra-ui/react";

const MoreBtn = ({ label }) => {
  return (
    <Flex fontSize={`sm`} color={`primary1.400`}>
      {label}
      <Box display={`inline-block`} ml={`0.5rem`} mt={`2px`}>
        <FontAwesomeIcon icon={faAngleRight} size={`xs`}/>
      </Box>
    </Flex>
  )
}

export default MoreBtn