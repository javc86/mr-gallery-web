/* eslint-disable max-len */
import React from 'react'
import TESelect from 'react-tailwindcss-select'

import { Item } from '@/typing/Common'

export interface SelectOption {
    value: string
    label: string
}

export type SelectValue = SelectOption | SelectOption[] | null;

type Props = {
  items: Item[]
  value: SelectValue
  onChange: (value: SelectValue) => void
}

const Select = ({
  items,
  value,
  onChange,
}: Props) => (
  <TESelect
    primaryColor="bg-primary"
    value={value}
    onChange={onChange}
    options={items}
  />
)

export default Select
