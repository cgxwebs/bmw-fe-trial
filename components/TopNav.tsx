import {Box, Flex} from "@chakra-ui/react";
import React from "react";
import NImage from "next/image";
import {Heading} from "@chakra-ui/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import notificationActiveIcon from "../assets/notification-icon-active.svg";
import settingsIcon from "../assets/settings-icon.svg";

const NavIcon = ({icon}) => {
  return (
    <Box w={`48px`}>
      <NImage src={icon}/>
    </Box>
  );
}

const TopNav = ({name, avatar}) => {
  return (
    <Flex justifyContent={`space-between`} mb={`1rem`}>
      <Flex gap={`1rem`}>
        <Box w={`50px`}>
          <NImage src={avatar} />
        </Box>
        <Box mt={`5px`}>
          <Heading as={`h1`} size={`sm`}>Good morning, {name}</Heading>
          <Flex fontSize={`sm`} color={`primary1.900`} mt={`0.2rem`}>
            Visit Profile
            <Box display={`inline-block`} ml={`0.5rem`} mt={`1px`}>
              <FontAwesomeIcon icon={faAngleRight} size={`xs`}/>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex gap={`1rem`}>
        <NavIcon icon={settingsIcon} key={`settings`} />
        <NavIcon icon={notificationActiveIcon} key={`notifications`} />
      </Flex>
    </Flex>
  );
}

export default TopNav;