import {Box, Flex, Text} from "@chakra-ui/react";
import style from '../styles/DailyHabits.module.css'
import DailyHabitsBtn from "./DailyHabitsBtn";
import {Heading} from "@chakra-ui/layout";
import WidgetHeader from "./WidgetHeader";

const DailyHabits = () => {
  return (
    <Box className={`widgetContainer ${style.dailyHabitsContainer}`} color='white' width={`100%`}>
      <WidgetHeader h1={`Daily Habits`} h2={`Today, April 25`} type={2} />
      <Flex width={`50%`} justifyContent={`space-between`} mt={`2.5rem`}>
        <DailyHabitsBtn title={`Learn`} subtitle={`Read now`}/>
        <DailyHabitsBtn title={`Journal`} subtitle={`Write now`}/>
      </Flex>
    </Box>
  )
}

export default DailyHabits