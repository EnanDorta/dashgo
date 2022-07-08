import { Stack, HStack, Box } from '@chakra-ui/react'
import PaginationItem from './PaginationItem'

const Pagination = () => {
  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> <strong>de</strong> <strong>100</strong>
      </Box>

     <HStack spacing="2">
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2}/>
        <PaginationItem number={3}/>
        <PaginationItem number={4}/>
        <PaginationItem number={5}/>
        <PaginationItem number={6}/>
      </HStack>
    </Stack>
  )
}

export default Pagination