import { Layout } from 'components/Layout'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { Card } from 'components/Card'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { FormInput } from 'components/FormInput'
import { Button } from 'components/Button'
import { Container } from 'components/Container'
import { useBooksContext } from 'context/book'
import { Book } from 'types/schema'
import { usePath } from 'hooks/usePath'
import { ROUTES } from 'constants/routes'

const bookFormDefaultValues = {
  title: '',
  author: '',
  description: '',
  publicationDate: '',
}

const bookFormValidationSchema = z.object({
  title: z.string().min(1, 'Required.').trim(),
  author: z.string().min(1, 'Required.').trim(),
  description: z
    .string()
    .min(20, { message: 'Must be 20 or more characters long' })
    .trim(),
  publicationDate: z.string().date().min(1, 'Required.').trim(),
})

const BookForm = () => {
  const { addBookDetails } = useBooksContext()
  const history = usePath()

  const formInstance = useForm({
    defaultValues: bookFormDefaultValues,
    resolver: zodResolver(bookFormValidationSchema),
  })
  const { handleSubmit } = formInstance

  const onSubmit = (data: typeof bookFormDefaultValues) => {
    const bookData = {
      id: new Date().valueOf(),
      cover: '',
      ...data,
    }
    addBookDetails(bookData as Book)
    history.push(ROUTES.DASHBOARD)  
  }

  return (
    <Card spacing={false}>
      <FormProvider {...formInstance}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-6 gap-6 p-6">
            <div className="col-span-3">
              <FormInput
                label="Title"
                name="title"
                rules={{ required: 'Required' }}
                fullWidth
              />
            </div>
            <div className="col-span-3">
              <FormInput
                label="Author"
                name="author"
                rules={{ required: 'Required' }}
                fullWidth
              />
            </div>
            <div className="col-span-4">
              <FormInput
                label="Description"
                name="description"
                rules={{ required: 'Required' }}
                fullWidth
              />
            </div>
            <div className="col-span-6">
              <FormInput
                label="Publication Date"
                name="publicationDate"
                rules={{ required: 'Required' }}
                type="date"
                fullWidth
              />
            </div>
          </div>
          <div className="px-5 py-2 text-right bg-gray-50 rounded-b-md">
            <Button appearance="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </FormProvider>
    </Card>
  )
}

const FormsPage = () => {
  return (
    <Layout>
      <Container>
        <section className="py-20">
          <Heading as="h1" className="mb-8 text-orange-400">
            Add Book
          </Heading>

          <div className="grid grid-cols-3 gap-10">
            <div className="col-span-1">
              <Text className="text-lg">Personal Details about books</Text>
              <Text className="text-sm text-gray-500">
                Use a relevant book information while filling the details
              </Text>
            </div>
            <div className="col-span-2">
              <BookForm />
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default FormsPage
