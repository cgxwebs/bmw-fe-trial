import {Box, Flex, Progress, Select, Text} from "@chakra-ui/react";
import React from "react";
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/react'
import {Heading} from "@chakra-ui/layout";
import WidgetHeader from "./WidgetHeader";

const WeeklyProgress = ({current, lastWeek}) => {
  return (
    <Box className={`widgetContainer`} bg={`white`} width={`100%`}>
      <Flex justifyContent={`space-between`}>
        <Flex justifyContent={`center`} alignItems={`center`}>
          <WidgetHeader
            h1={`Weekly Progress`}
            h2={<>Last week: <strong>{lastWeek}%</strong></>}
          />
        </Flex>
        <div className={`verticalSpacer`}>&nbsp;</div>
        <Box>
          <CircularProgress color={`orange`} thickness={`8px`} value={current} size={`72px`}>
            <CircularProgressLabel>{current}%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Flex>
    </Box>
  )
}

export default WeeklyProgress