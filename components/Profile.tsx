import {Avatar, Box, Flex, Progress, Select, Tag, TagLabel, Text} from "@chakra-ui/react";
import style from '../styles/Summary.module.css'
import React from "react";
import SummaryProgress from "./SummaryProgress";
import {Heading} from "@chakra-ui/layout";
import NImage from "next/image";
import badgeIcon from "../assets/badge-icon.svg";
import currentStreakIcon from "../assets/current-streak.svg";
import bestStreakIcon from "../assets/best-streak.svg";
import WidgetHeader from "./WidgetHeader";

const StreakBadge = ({streakVal, streakType}) => {
  const icon = streakType === 'current' ? currentStreakIcon : bestStreakIcon;
  const label = streakType === 'current' ? `Current Streak` : `Best Streak`;
  return (
    <Flex borderRadius={`1em`} border={`1px`} borderColor={`gray.200`} p={`1em`} width={`100%`} alignItems={`flex-start`}>
      <Box flexShrink={0} className={`streakIcon`}>
        <NImage src={icon} alt={`StreakIcon`} />
      </Box>
      <Box ml={`0.6rem`} textAlign={`left`}>
        <WidgetHeader
          h1={<>{streakVal} {streakVal > 1 ? `days` : `day`}</>}
          h2={label}
        />
      </Box>
    </Flex>
  )
}

const DateDot = ({label}) => {
  return (
    <Flex direction={`column`} align={`center`}>
      <Text fontSize={`sm`}>{label}</Text>
      <span className={`dateDot`}/>
    </Flex>
  )
}

const Profile = ({profilePicture, fullName, emailAddr, status, currentStreak, bestStreak}) => {
  return (
    <Box className={`widgetContainer`} bg={`white`}>
      <Box textAlign={`center`}>
        <Box my={`1.5rem`} display={`inline-block`} width={`120px`} height={`120px`} borderRadius={`70px`} bg={`white`} padding={`7px`} borderWidth={3} borderColor={`grey.200`}>
          <NImage src={profilePicture}/>
        </Box>

        <WidgetHeader h1={fullName} h2={emailAddr} />

        <Tag size='lg' bg={`white`} py={`0.6rem`} px={`1rem`} borderRadius='full' my={`2rem`} boxShadow={`lg`}>
          <NImage src={badgeIcon} alt={`Badge`}/>
          <TagLabel pl={`0.4rem`} color={`tertiary.800`}>{status}</TagLabel>
        </Tag>

        <Flex mt={`1rem`} gap={`0.5rem`}>
          <StreakBadge key={`current`} streakType={`current`} streakVal={currentStreak}/>
          <StreakBadge key={`best`} streakType={`best`} streakVal={bestStreak}/>
        </Flex>

        <Flex mt={`2rem`} justifyContent={`space-between`}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'].map((item: string, k) => (
            <DateDot label={item} key={k}/>
          ))}
        </Flex>
      </Box>

    </Box>
  )
}

export default Profile