import React, { SFC, ReactNode } from 'react'

interface IProps {
  children: ReactNode;
  href: string;
  className?: string;
}

const ExternalLink: SFC<IProps> = (props) => {
  return (
    <a
      target='_blank'
      { ...props }
    />
  )
}

export default ExternalLink