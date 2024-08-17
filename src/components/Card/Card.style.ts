import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'bg-white',
  variants: {
    shadow: {
      true: 'shadow',
    },
    spacing: {
      true: false,
    },
  },
})

export default styles
