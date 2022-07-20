import {Box, Flex, Text} from "@chakra-ui/react";
import Image from "next/image";
import checkedIcon from "../assets/Checked.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";

interface propsType {
  title: string,
  subtitle: string
}

const DailyHabitsBtn = ({title, subtitle}: propsType) => {
  return (
    <Flex>
      <Image src={checkedIcon} alt={`Checked Icon`}/>
      <Flex direction={`column`} ml={`0.8rem`}>
        <Text mb={`0.1rem`}>{title}</Text>
        <Flex fontSize={`sm`} color={`primary1.400`}>
          {subtitle}
          <Box display={`inline-block`} ml={`0.6rem`} mt={`2px`}>
            <FontAwesomeIcon icon={faAngleRight} size={`xs`}/>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DailyHabitsBtn