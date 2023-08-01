/* eslint-disable max-len */
import React from 'react'
import {
  TEModal,
  TEModalBody,
  TEModalContent,
  TEModalDialog,
  TEModalFooter,
  TEModalHeader,
} from 'tw-elements-react'

import { SecondaryButton } from '@/components'

type Props = {
  open?: boolean
  title?: string
  message: string
  onClose: () => void
}

const BasicDialog = ({
  open = false,
  title,
  message,
  onClose,
}: Props) => (
  <TEModal show={open}>
    <TEModalDialog>
      <TEModalContent>
        <TEModalHeader>
          {!!title && (
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
              {title}
            </h5>
          )}
          <button
            type="button"
            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </TEModalHeader>
        <TEModalBody>{message}</TEModalBody>
        <TEModalFooter>
          <SecondaryButton label="Close" onClick={onClose} />
        </TEModalFooter>
      </TEModalContent>
    </TEModalDialog>
  </TEModal>
)

export default BasicDialog
