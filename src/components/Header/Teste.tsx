import { Text } from '@chakra-ui/react'

const Teste = () => {
  console.log('O log executou')
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  )
}

export default Teste