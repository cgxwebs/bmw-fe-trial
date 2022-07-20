import {Box, Progress, Text} from "@chakra-ui/react";
import React from "react";
import style from '../styles/Summary.module.css'

const SummaryProgress = ({ value, label }: any) => {
  return (
    <Box className={style.OuterWrapper} color={`tertiary.600`}>
      <Box className={style.Wrapper}>
        <Progress value={value} size='sm' colorScheme='orange' className={style.summaryProgress}/>
      </Box>
      <span className={style.Text}>{label}</span>
    </Box>
  )
}

export default SummaryProgress