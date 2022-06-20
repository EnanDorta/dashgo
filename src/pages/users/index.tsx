import { Box, Button, Checkbox, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, Text, Icon } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";

const UserList = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button 
              as="a" 
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}                   
            >
              Criar novo
            </Button>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Enan Dorta</Text>
                    <Text fontSize="sm" color="gray.300">junior.goncalves01@hotmail.com</Text>
                  </Box>
                </Td>
                <Td>19 de Junho, 2022</Td>
                <Td>
                <Button 
                  as="a" 
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple" 
                  leftIcon={<Icon as={RiPencilLine} fontSize="16" />}         
                >
                  Editar
                </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
} 

export default UserList;