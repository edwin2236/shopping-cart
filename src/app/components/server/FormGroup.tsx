import { type FC, type ReactNode } from 'react'

interface FormGroupProps {
  children: ReactNode
}
const FormGroup: FC<FormGroupProps> = ({ children }) => {
  return <div className="flex flex-col justify-center gap-2">{children}</div>
}

export default FormGroup
