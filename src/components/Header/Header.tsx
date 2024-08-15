import React from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'

import { styled } from '@mui/system';
import { COLORS } from 'constants/colors';
import { Container } from 'components/Container';
import Logo from 'components/icons/svg/logo.svg'

const AppBarStyled = styled(AppBar)({
  boxShadow: 'none',
  backgroundColor: COLORS.primaryLight,
  color: 'black'
})

export const Header = () => {
  return (
    <header className="flex justify-end mx-auto">
      <Box sx={{ flexGrow: 1 }}>
        <AppBarStyled className="h-16 py-4" position="static">
          <Container>
           <Logo /> 
          </Container>
        </AppBarStyled>
      </Box>
    </header>
  )
}
