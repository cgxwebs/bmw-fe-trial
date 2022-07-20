import {Box, Flex, Progress, Select, Text} from "@chakra-ui/react";
import React from "react";
import NImage from "next/image";
import badgeIcon from "../assets/badge-icon.svg";
import {Heading} from "@chakra-ui/layout";
import MoreBtn from "./MoreBtn";
import WidgetHeader from "./WidgetHeader";


const StatusWidget = ({status, points}) => {
  return (
    <Box className={`widgetContainer`} bg={`white`}>
      <Flex gap={`2rem`}>
        <Box>
          <Flex justifyContent={`center`} alignItems={`center`} className={`statusBadgeBig`}>
            <NImage src={badgeIcon}/>
          </Flex>
        </Box>
        <Flex width={`100%`} justifyContent={`space-between`}>
          <Flex direction={`column`}>
            <WidgetHeader h1={status} h2={<>&gt; {points} points</>}/>
          </Flex>
          <Box>
            <MoreBtn label={`View Details`}/>
          </Box>
        </Flex>
      </Flex>
      <Box mt={`1.5rem`}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sagittis sapien.</Text>
        <Progress value={24}
                  size={`sm`}
                  colorScheme={`orange`}
                  mt={`1.5rem`}
                  className={`globalProgress`}
        />
        <Text mt={`1.5rem`} color={`tertiary.600`}>Earn 160 points more to reach Advanced</Text>
      </Box>
    </Box>
  )
}

export default StatusWidget