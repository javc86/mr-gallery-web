/* eslint-disable max-len */
import React from 'react'
import Datepicker, { DateValueType } from 'react-tailwindcss-datepicker'

type Props = {
  value: DateValueType
  onChange: (value: DateValueType) => void
  minDate?: Date | null
  maxDate?: Date | null
}

const DatePicker = ({
  value,
  onChange,
  minDate = null,
  maxDate = null,
}: Props) => (
  <Datepicker
    useRange={false}
    asSingle
    value={value}
    onChange={onChange}
    minDate={minDate}
    maxDate={maxDate}
    containerClassName="border rounded-[5px] border-slate-300"
    readOnly
  />
)

export default DatePicker
