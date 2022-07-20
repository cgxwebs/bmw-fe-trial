import {Box, Flex, Progress, Select, Text} from "@chakra-ui/react";
import style from '../styles/Summary.module.css'
import React from "react";
import SummaryProgress from "./SummaryProgress";
import {Heading} from "@chakra-ui/layout";
import WidgetHeader from "./WidgetHeader";

const Summary = () => {
  return (
    <Box className={`widgetContainer`} bg={`tertiary.200`}>
      <Flex justifyContent={`space-between`} alignItems={`flex-start`}>
        <Box>
          <WidgetHeader
            h1={`Summary`}
            h2={`24 Apr - 30 Apr 2022`}
            type={2} />
        </Box>
        <Box className={style.select} display={`inline-block`}>
          <Select bg={`white`}
                  placeholder='Custom'
                  size='sm'
                  variant={`unstyled`}
          />
        </Box>
      </Flex>
      <Flex mt={`2rem`} justifyContent={`space-between`}>
        <SummaryProgress value={10} label={`Sun`} />
        <SummaryProgress value={20} label={`Mon`} />
        <SummaryProgress value={30} label={`Tue`} />
        <SummaryProgress value={40} label={`Wed`} />
        <SummaryProgress value={50} label={`Thur`} />
        <SummaryProgress value={60} label={`Fri`} />
        <SummaryProgress value={70} label={`Sat`} />
      </Flex>
    </Box>
  )
}

export default Summary