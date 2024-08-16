import { WithChildren } from 'types/common'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1">
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  )
}
