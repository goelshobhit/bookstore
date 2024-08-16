import { useState } from 'react'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Layout } from 'components/Layout'

import { styled } from '@mui/system'
import { COLORS } from 'constants/colors'

import { Container } from 'components/Container'
import { Button } from 'components/Button'
import CardScreen from 'components/icons/svg/card-screen.svg'

import Box from '@mui/material/Box'

import { useFetchBooks } from 'hooks/data/useFetchBooks'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';

const WrapperSection = styled('div')({
  backgroundColor: COLORS.primaryLight,
})

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',

  // Media query for mobile devices
  '@media (max-width: 768px)': {
    flexDirection: 'column',
  },
})

const BookContainer = dynamic(
  () => import('components/BookContainer/BookContainer'),
  {
    loading: () => <p>Loading...</p>,
  },
)

const DashboardPage = () => {
  const [skip, setSkip] = useState<number>(5)
  const { books, isLoading, mutate }: any = useFetchBooks(skip)
  const router = useRouter();

  const handlePagination = (direction: string): void => {
    if (direction === 'next') {
      setSkip(skip + 5)
      mutate()
    } else if (direction === 'prev') {
      setSkip(Math.max(0, skip - 5))
      mutate()
    }
  }

  return (
    <Layout>
      <WrapperSection className="w-full pt-8">
        <Container>
          <Row>
            <div className="xl:w-1/2 w-96 xl:ml-32">
              <Heading className="text-left pt-10 xl:text-6xl md:text-xl">
                A collaborative Reading Time that{' '}
                <span className="text-orange-400">you Need</span>
              </Heading>
              <Text className="font-light pt-2 xl:text-2xl md:text-sm">
                An enim nullam tempor sapien gravida donec enim ipsum porta
                justo congue magna at pretium purus pretium ligula{' '}
              </Text>
              <Button
                appearance="primary"
                className="my-7 animate-[wiggle_1s_ease-in-out_infinite]"
              >
                Scroll
              </Button>
            </div>
            <Box
              className="xl:w-1/2 w-96"
              sx={{ display: { xl: 'block', xs: 'none' } }}
            >
              <CardScreen />
            </Box>
          </Row>
        </Container>
      </WrapperSection>

      <Container className="py-32">
        <div className="flex w-full justify-between pb-16">
          <Heading as="h1" className="text-orange-400">
            {' '}
            Books Collection
          </Heading>
          <span>
            <Button
              loading={isLoading}
              onClick={() => handlePagination('prev')}
            >{`<`}</Button>
            <Button
              className="ml-4"
              loading={isLoading}
              onClick={() => handlePagination('next')}
            >{`>`}</Button>
            <Button appearance="primary" className="ml-4" loading={isLoading}  onClick={() => router.push('/forms')}>
              Add Books
            </Button>
          </span>
        </div>

        <BookContainer books={books} />
      </Container>
    </Layout>
  )
}

export default DashboardPage
