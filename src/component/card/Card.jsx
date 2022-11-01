import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useCard } from "./useCard";

export default function Card({ newsDataItem }) {
  const { savedNews, handleSaveNews, handleDeleteNews } = useCard(newsDataItem);

  return (
    <a href={newsDataItem?.url} target="_blank" rel="noreferrer">
      <Center
        py={6}
        _hover={{
          cursor: "pointer",
        }}
      >
        <Box
          maxW={"445"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box h={"210px"} bg={"gray.100"}>
            <Image
              objectFit="cover"
              src={
                newsDataItem.urlToImage ||
                "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              }
              alt={newsDataItem?.title}
              h={"210px"}
              w="100%"
            />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
              mt={5}
            >
              {newsDataItem?.source?.name}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"1.2rem"}
              fontFamily={"body"}
              noOfLines={1}
              _hover={{ textDecoration: "underline" }}
            >
              {newsDataItem?.title}
            </Heading>
            <Text color={"gray.500"} noOfLines={4}>
              {newsDataItem?.content}
            </Text>
          </Stack>

          <Stack mt={2} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{newsDataItem.author || "unknown"}</Text>
            <Text color={"gray.500"}>
              {new Date(newsDataItem.publishedAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </Text>
          </Stack>

          <HStack mt={2} justifyContent={"end"}>
            {savedNews.some((e) => e.url === newsDataItem.url) ? (
              <Button
                h={8}
                bgColor={"red.600"}
                onClick={() => handleDeleteNews(newsDataItem.url)}
              >
                Unsave
              </Button>
            ) : (
              <Button h={8} bgColor={"blue.600"} onClick={handleSaveNews}>
                Save
              </Button>
            )}
          </HStack>
        </Box>
      </Center>
    </a>
  );
}
