import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useColorMode} from '@chakra-ui/color-mode'
import React from 'react'
import {Box, Flex, Link} from '@chakra-ui/react'
import DailyHabits from "../components/DailyHabits";
import Summary from "../components/Summary";
import WeeklyProgress from "../components/WeeklyProgress";
import Profile from "../components/Profile";
import profilePicture from "../assets/profile-picture.svg";
import bmwLogo from "../assets/bmw-logo.svg";
import StatusWidget from "../components/StatusWidget";
import BlogPost from "../components/BlogPost";
import article1TH from "../assets/article-1.svg";
import article2TH from "../assets/article-2.svg";
import TopNav from "../components/TopNav";
import {Heading} from "@chakra-ui/layout";
import NImage from "next/image";

const Home: NextPage = () => {

  // hook which help us to toggle the color modes
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box className={styles.mainContainer} minHeight='100vh'>
      <Head>
        <title>Build My Wealth</title>
        <meta name="description" content="Build My Wealth"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Flex minHeight='100vh'>
        <Box w='20%' minHeight='100vh' bg='tertiary.200' flexGrow={0} p={`2rem`}>
          <NImage src={bmwLogo} />
        </Box>
        <Box w='80%' p={`2rem`} flexShrink={0} minHeight='100vh' bg='primary2.100'>
          <TopNav name={`Rose May`} avatar={profilePicture} />

          <Flex gap={`2rem`}>
            <Box width={`65%`}>
              <DailyHabits/>

              <Flex mt={`2rem`} gap={`2rem`} width={`100%`}>
                <Box width={`50%`}>
                  <Profile
                    profilePicture={profilePicture}
                    fullName={`Rose May Sanchez`}
                    emailAddr={`rosemay@gmail.com`}
                    currentStreak={8}
                    bestStreak={20}
                    status={`Beginner`}
                  />
                </Box>
                <Flex direction={`column`} width={`50%`} gap={`2rem`}>
                  <WeeklyProgress current={40} lastWeek={90}/>
                  <Summary/>
                </Flex>
              </Flex>
            </Box>
            <Box width={`35%`}>
              <StatusWidget status={`Beginner`} points={9}/>

              <Flex justifyContent={`space-between`} my={`1.5rem`} mx={`5px`}>
                <Heading as={`h3`} size={`sm`}>Recommended</Heading>
                <Link href={`#`} color={`tertiary.600`}>Show All</Link>
              </Flex>

              <Flex direction={`column`} gap={`2rem`}>
                <BlogPost key={1}
                          tag={`Personal Finance`}
                          title={`From saving money to paying down debt, here's why financial...`}
                          date={`28 Apr`}
                          mins={5}
                          thumbnail={article1TH}/>

                <BlogPost key={2}
                          tag={`Personal Finance`}
                          title={`Why knowing your net worth is important — Your net worth is...`}
                          date={`28 Apr`}
                          mins={5}
                          thumbnail={article2TH}/>
              </Flex>
            </Box>
          </Flex>


        </Box>
      </Flex>

    </Box>
  )
}

export default Home