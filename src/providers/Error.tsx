import React from 'react'

import { setError } from '@/actions/status'
import { BasicDialog } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { Error } from '@/typing/Common'

type Props = {
  children: React.ReactNode
}

const ErrorProvider = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const error = useAppSelector<Error | null>((state) => state.status.error)
  const closeDialog = () => dispatch(setError(null))
  return (
    <>
      {children}
      <BasicDialog
        open={!!error}
        title={error?.title || ''}
        message={error?.message || ''}
        onClose={closeDialog}
      />
    </>
  )
}

export default ErrorProvider
