import { Box, Button, Flex, HStack, SimpleGrid, Spinner, VStack } from '@chakra-ui/react';
import { Input } from '../../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Header from '../../components/Header';
import SideBar from '../../components/Sidebar';
import Link from 'next/link';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import { api } from '../../service/api';
import { queryClient } from '../../service/queryClient';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().required('O campo E-mail é obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('O campo senha é obrigatório')
    .min(6, 'A senha precisa ser superior ou igual a 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

const CreateUser = () => {
  const CreateUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });

      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    }
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
    CreateUser.mutateAsync(data);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={['6', '8']} onSubmit={handleSubmit(handleCreateUser)}>
          <VStack>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="name" label="Nome completo" {...register('name')} error={errors.name} />
              <Input name="email" type="email" label="E-mail" {...register('email')} error={errors.email} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input name="password" type="password" label="Senha" {...register('password')} error={errors.password} />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href={'/users'} passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme="pink" isLoading={CreateUser.isLoading} type="submit">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateUser;
