import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { VStack, Image, Center, Text } from 'native-base';

export function SignIn() {
  return (
    <VStack flex={1} backgroundColor="gray.700">
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
    </VStack>
  );
}
