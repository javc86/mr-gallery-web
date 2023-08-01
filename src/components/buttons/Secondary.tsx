/* eslint-disable max-len */
import React from 'react'
import {
  TERipple,
} from 'tw-elements-react'

type Props = {
  label: string
  onClick: () => void
}

const SecondaryButton = ({
  label,
  onClick,
}: Props) => (
  <TERipple>
    <button
      type="button"
      className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
      onClick={onClick}
    >
      {label}
    </button>
  </TERipple>
)

export default SecondaryButton
