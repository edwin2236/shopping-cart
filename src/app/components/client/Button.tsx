'use client'

import {
  type ReactNode,
  type FC,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  rippleEffectClass?: string
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const createRippleEffect = (event: MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget

    const circle = document.createElement('span')
    const diameter = Math.max(button.clientWidth, button.clientHeight)
    const radius = diameter / 2

    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`
    circle.style.animationFillMode = 'forwards'
    circle.className =
      'ripple absolute rounded-full transform-[scale(0)] bg-ripple animate-ripple'

    const ripple = button.getElementsByClassName('ripple')[0]
    ripple?.remove()
    button.appendChild(circle)
    props.onClick?.(event)
  }

  return (
    <button
      {...props}
      className={`relative flex h-10 w-10 cursor-pointer items-center justify-center gap-2 overflow-hidden border-0 outline-0 transition-[background-color] duration-300 ${
        props.className ?? ''
      }`}
      onClick={createRippleEffect}
    >
      {children}
    </button>
  )
}

export default Button
