import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Icon,
  useBreakpointValue,
  Center,
  Spinner,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { BsFillTrashFill } from 'react-icons/bs';
import Header from '../../components/Header';
import Pagination from '../../components/Pagination';
import SideBar from '../../components/Sidebar';
import { useUsers } from '../../service/hooks/useUsers';
import { queryClient } from '../../service/queryClient';
import { api } from '../../service/api';
import EditUserModal from '../../components/Modal/EditUserModal';

interface Users {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface UpdateUser {
  id: string;
  name: string;
  email: string;
}

const UserList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page);

  console.log('data', data);

  const [updateUser, setUpdateUser] = useState<UpdateUser>({} as UpdateUser);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleUpdateUser({ id, name, email }: { id: string; name: string; email: string }) {
    onOpen();
    setUpdateUser({
      id,
      name,
      email,
    });
  }

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ['user', userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, // 10 minutes
      }
    );
  }

  return (
    <Box>
      {isOpen && <EditUserModal isOpen={isOpen} onClose={onClose} updateUser={updateUser} />}
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
            </Heading>
            <NextLink href={'/users/create'} passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          <Table>
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8">Editar usuário</Th>
                <Th>Deletar</Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading ? (
                <Tr>
                  <Td colSpan={10}>
                    <Center h="100%">
                      <Spinner />
                    </Center>
                  </Td>
                </Tr>
              ) : error ? (
                <Tr>
                  <Td colSpan={10}>
                    <Center h="100%">
                      <Tr>Erro ao carregar a listagem de usuários. Tente novamente...</Tr>
                    </Center>
                  </Td>
                </Tr>
              ) : (
                data.users.map(({ id, email, created_at, name }: Users) => (
                  <Tr key={id}>
                    <Td px={['4', '4', '6']}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(id)}>
                          <Text>{name}</Text>
                        </Link>
                        <Text fontSize="sm" color="gray.300">
                          {email}
                        </Text>
                      </Box>
                    </Td>
                    {isWideVersion && <Td>{created_at}</Td>}
                    <Td>
                      <Button
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        cursor="pointer"
                        onClick={() => handleUpdateUser({ id, name, email })}
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        size="sm"
                        ml="3"
                        fontSize="sm"
                        cursor="pointer"
                        background="none"
                        color="red.400"
                        _hover={{
                          opacity: 0.7,
                        }}
                        onClick={() => {}}
                      >
                        <BsFillTrashFill size="16" />
                      </Button>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
          <Pagination onPageChange={setPage} totalCountOfRegisters={200} currentPage={page} />
        </Box>
      </Flex>
    </Box>
  );
};

export default UserList;
