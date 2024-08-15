import { WithChildren } from 'types/common'
import { Header } from 'components/Header'

export const Layout = ({ children }: WithChildren) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1">
        <Header />
        {children}
      </main>
    </div>
  )
}
