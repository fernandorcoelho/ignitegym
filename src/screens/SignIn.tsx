import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { VStack, Image, Center, Text, Heading } from 'native-base';

export function SignIn() {
  return (
    <VStack flex={1} backgroundColor="gray.700" px={10}>
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" size="xl" mb={6} fontFamily="heading">
          Acesse sua conta
        </Heading>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input placeholder="Senha" secureTextEntry />

        <Button title="Acessar" />
      </Center>

      <Button title="Criar conta" variant="outline" />
    </VStack>
  );
}
