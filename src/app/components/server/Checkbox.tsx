import { useId, type FC, type InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox: FC<CheckboxProps> = ({ label, ...restOfProps }) => {
  const checkboxId = useId()
  return (
    <div className="flex items-center gap-2">
      <input
        {...restOfProps}
        id={checkboxId}
        className="h-5 w-5 accent-teal-700 dark:accent-teal-300"
        type="checkbox"
      />
      {label !== undefined ? (
        <label className="dark:text-white" htmlFor={checkboxId}>
          {label}
        </label>
      ) : null}
    </div>
  )
}

export default Checkbox
