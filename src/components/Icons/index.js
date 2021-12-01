import React from 'react'
import { StyledIcon } from './styled'

import IconNames from './iconNames'
import Icons from './icons'

const Icon = ({ className, name, color = 'black', size, e2eId }) => {
  if (!name || !Icons[name]) {
    return null
  }
  const { element, height = 24, width = 24 } = Icons[name]

  return (
    <StyledIcon
      className={className}
      iconColor={color}
      width={size || width}
      height={size || height}
      viewBox={'0 0 ' + width + ' ' + height}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      {element}
    </StyledIcon>
  )
}

export default Icon

export { IconNames, Icons }