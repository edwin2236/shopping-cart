import { type FC, type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="flex w-full flex-col">{children}</div>
}

export default Container
