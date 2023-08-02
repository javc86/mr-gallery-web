/* eslint-disable max-len */
import React, { ChangeEventHandler } from 'react'
import { TEInput } from 'tw-elements-react'

type Props = {
  value: string
  label?: string
  type?: 'text' | 'number' | 'password' | 'tel' | 'url'
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({
  value,
  label,
  type = 'text',
  onChange,
}: Props) => (
  <TEInput
    type={type}
    label={label}
    onChange={onChange}
    value={value}
  />
)

export default Input
