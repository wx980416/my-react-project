import React, { memo } from 'react'
import { HeaderWrapper } from './style.js'
import HeaderCenter from './components/header-center'
import HeaderLeft from './components/header-left'
import HeaderRight from './components/header-right'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader
