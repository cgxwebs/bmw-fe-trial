import {Box, Flex, Progress, Select, Tag, TagLabel, Text} from "@chakra-ui/react";
import React from "react";
import NImage from "next/image";

const BlogPost = ({tag, title, date, mins, thumbnail}) => {
  return (
    <Box className={`widgetContainer`} bg={`white`}>
      <Flex>
        <Flex direction={`column`} mr={`1rem`}>
          <Box>
            <Tag size={`lg`}
                 variant='solid'
                 bg={`tertiary.200`}
                 color={`tertiary.600`}
                 borderRadius={`full`}>
              <TagLabel>{tag}</TagLabel>
            </Tag>
          </Box>
          <Text mt={`1rem`}
                fontWeight={`bold`}
          >
            {title}
          </Text>
        </Flex>
        <NImage width={`220px`} src={thumbnail}/>
      </Flex>

      <Flex color={`tertiary.600`} mt={`1rem`} justifyContent={`space-between`}>
        <Text>{date} &middot; {mins} min read</Text>
        <Text>&middot;&middot;&middot;</Text>
      </Flex>
    </Box>
  )
}

export default BlogPost