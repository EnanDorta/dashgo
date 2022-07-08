import { Box, Button, Checkbox, Flex, Heading, Table, Tbody, Td, Th, Thead, Tr, Text, Icon, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import SideBar from "../../components/Sidebar";

const UserList = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Link href={"/users/create"} passHref>
              <Button 
                as="a" 
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}                   
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWideVersion && <Th>Data de cadastro</Th> }
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Enan Dorta</Text>
                    <Text fontSize="sm" color="gray.300">teste@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>19 de Junho, 2022</Td> }
                <Td>
               {isWideVersion &&  
                <Button 
                    as="a" 
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}         
                  >
                    Editar
                  </Button>
                }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carlos Eduardo</Text>
                    <Text fontSize="sm" color="gray.300">teste2@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>23 de Junho, 2022</Td> }
                <Td>
                {isWideVersion &&  
                <Button 
                    as="a" 
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}         
                  >
                    Editar
                  </Button>
                }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" /> 
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Gabriel</Text>
                    <Text fontSize="sm" color="gray.300">teste3@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>25 de Junho, 2022</Td> }
                <Td>
                {isWideVersion &&  
                <Button 
                    as="a" 
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple" 
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}         
                  >
                    Editar
                  </Button>
                }
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
} 

export default UserList;