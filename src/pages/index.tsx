import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Layout } from 'components/Layout'
import { Container } from 'components/Container'
import { Button } from 'components/Button'
import CardScreen from 'components/icons/svg/card-screen.svg'

import { styled } from '@mui/system'
import Box from '@mui/material/Box'
import { COLORS } from 'constants/colors'

import dynamic from 'next/dynamic'

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
              <a href='#books_collection'>
              <Button
                appearance="primary"
                className="mt-5"

              >
                Read More...
              </Button>
              </a>
          
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

      <Container className="py-32" id="books_collection">
        <BookContainer />
      </Container>
    </Layout>
  )
}

export default DashboardPage
