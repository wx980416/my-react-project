import React, { memo } from 'react'
import footerData from '@/assets/data/footer.json'
import { FooterWrapper } from './style.js'

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className='wrapper'>
        <div className='service'>
          {footerData.map((item) => {
            return (
              <div className='item' key={item.name}>
                <div className='name'>{item.name}</div>
                <div className='list'>
                  {item.list.map((item) => {
                    return (
                      <div className='item' key={item}>
                        {item}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </FooterWrapper>
  )
})

export default AppFooter
