import { forwardRefWithAs } from 'utils/react'
import { Container as MContainer } from '@mui/system'

export interface ContainerProps {
  children?: React.ReactNode
}

export const Container = forwardRefWithAs<'div', ContainerProps>(
  (props, ref) => {
    const { children, ...rest } = props

    return (
      <MContainer ref={ref} {...rest} maxWidth="xl">
        {children}
      </MContainer>
    )
  },
)

export default Container
