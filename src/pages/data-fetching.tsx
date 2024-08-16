import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'

const DataFetchingPage = () => {

  return (
    <Layout>
      <div className="space-y-px">
        <Heading as="h3">Data fetching</Heading>
        <Text className="text-gray-500">
          Example of data fetching pattern with swr
        </Text>
      </div>
    </Layout>
  )
}

export default DataFetchingPage
