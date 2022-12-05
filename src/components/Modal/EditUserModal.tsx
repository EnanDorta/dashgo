import { useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react';
import { Input } from '../Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { api } from '../../service/api';
import { queryClient } from '../../service/queryClient';
import { useMutation } from 'react-query';
import swal2 from 'sweetalert2';
import { useRouter } from 'next/router';

interface EditProps {
  isOpen: boolean;
  onClose: () => void;

  updateUser: {
    id: string;
    name: string;
    email: string;
  };
}

interface UpdateUserFormData {
  name: string;
  email: string;
}

const UpdateUserFormSchema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().required('O campo E-mail é obrigatório').email('E-mail inválido'),
});

const EditUserModal = ({ isOpen, onClose, updateUser }: EditProps) => {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(UpdateUserFormSchema),

    defaultValues: {
      name: updateUser.name,
      email: updateUser.email,
    },
  });

  const { errors } = formState;

  const userUpdate = useMutation(
    async (data: UpdateUserFormData) => {
      const response = await api.put(`users/${updateUser.id}`, {
        user: {
          name: data.name,
          email: data.email,
          created_at: new Date(),
        },
      });

      if (response.status === 200) {
        onClose();
        swal2
          .fire({
            title: 'Usuário atualizando com sucesso',
            icon: 'success',
          })
          .then(() => router.push('/users'));
      } else {
        swal2.fire({
          title: 'Houve um erro na criação do usuário',
          icon: 'error',
        });
      }
      console.log(response);
      return response.data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    }
  );

  const handleUpdateUser: SubmitHandler<UpdateUserFormData> = async (data) => {
    userUpdate.mutateAsync(data);

    // await queryClient.prefetchQuery(['user', updateUser.id], async () => {
    //   const response = await api.put(`users/${updateUser.id}`, {
    //     user: {
    //       name: data.name,
    //       email: data.email,
    //     }
    //   });

    //   console.log('res', response);
    // });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent background="gray.800">
          <ModalHeader>
            <Text as="h1" fontSize="2xl" color="black.400" textAlign="center">
              Editar usuário
            </Text>
          </ModalHeader>
          <ModalCloseButton size="lg" />
          <Box as="form" onSubmit={handleSubmit(handleUpdateUser)}>
            <ModalBody>
              <Input name="name" label="Nome do usuário" {...register('name')} error={errors.name} />
              <Input name="email" label="Email do usuário" {...register('email')} error={errors.email} />
            </ModalBody>

            <ModalFooter>
              <Button type="submit" border="none" bg="pink.500" fontWeight="bold" mr={3}>
                Atualizar
              </Button>
            </ModalFooter>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditUserModal;
