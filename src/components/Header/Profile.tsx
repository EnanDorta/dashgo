import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

const Profile = () => {
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Enan Dorta</Text>
          <Text color="gray.300" fontSize="small">junior.goncalves01@hotmail.com</Text>
        </Box>
        <Avatar size="md" name="Enan Dorta" src="https://github.com/enandorta.png" />
    </Flex>
  )
}

export default Profile