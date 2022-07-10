import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string;
  password: string;
}

const SignIn = () => {

  const { register, handleSubmit, formState } = useForm()

  const handleSubmitForm: SubmitHandler<SignInFormData> = async (data) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log(data)
  }


  return (
    <Flex
      w='100vw'
      h='100vh'
      align="center"
      justify="center"
    >
    <Flex 
      as="form"
      width='100%'
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Stack spacing="4">
       
       <Input 
        name="email"
        label="E-mail"
        type="email"
        {...register('email')}
       />

       <Input 
        name="password"
        label="Senha"
        type="password"
        {...register('password')}
       />
        
      </Stack>
      <Button 
      type='submit'
      mt='6'
      colorScheme='pink'
      size='lg'
      isLoading={formState.isSubmitting}
      >
        Entrar
      </Button>
    </Flex>
    </Flex>
    
  )
}

export default SignIn;
