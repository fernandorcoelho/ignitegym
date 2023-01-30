import BackgroundImg from '@assets/background.png';
import { VStack, Image } from 'native-base';

export function SignIn() {
  return (
    <VStack flex={1} backgroundColor="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />
    </VStack>
  );
}
