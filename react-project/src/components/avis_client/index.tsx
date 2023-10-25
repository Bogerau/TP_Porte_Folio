'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Collaboration efficae</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
              }
              name={'Jane Cooper'}
              title={'CEO chez ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Design intuitif</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,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'
              }
              name={'Michel Dupont'}
              title={'CEO chez DEF Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Très bon service</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'data:image/jpeg;base64,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'
              }
              name={'Catherine Godet'}
              title={'CEO chez GHI Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}