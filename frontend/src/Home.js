import React from 'react';
import { Text, Button, VStack, Center, Link } from '@chakra-ui/react';
function Home() {
  return (
    <Center minH="80vh">
      <VStack spacing={4} align="center">
        <Text
          fontFamily="Arial, sans-serif"
          fontSize="40px"
          color="gray.700"
          fontWeight="bold"
        >
          Welcome to StreamCinema
        </Text>
        <Link href="/login">
          <Button colorScheme="teal" width="150px">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button colorScheme="teal" width="150px">
            Register
          </Button>
        </Link>
        <Link href="/video">
          <Button colorScheme="teal" width="150px">
            Watch Video
          </Button>
        </Link>
        <Link href="/upload">
          <Button colorScheme="teal" width="150px">
            Upload Video
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}

export default Home;
