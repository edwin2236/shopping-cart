'use client'

import { type FC } from 'react'
import ReactDropdown, { type ReactDropdownProps } from 'react-dropdown'

interface DropdownProps extends ReactDropdownProps {}

const Dropdown: FC<DropdownProps> = ({ ...restOfProps }) => {
  return (
    <ReactDropdown
      className="cursor-pointer rounded-3xl bg-btn px-4 py-2 hover:bg-btn-hover dark:text-white"
      {...restOfProps}
    />
  )
}

export default Dropdown
