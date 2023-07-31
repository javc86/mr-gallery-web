/* eslint-disable max-len */
import React from 'react'

export type ItemTab = {
  label: string
  index: number
  onSelect: () => void
}

type Props = {
  actived: number
} & ItemTab

const Tab = ({
  label,
  index,
  actived,
  onSelect,
}: Props) => (
  <li role="presentation">
    {index === actived ? (
      <a
        href={`#${label}`}
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        onClick={onSelect}
        data-te-nav-active
        role="tab"
      >
        {label}
      </a>
    ) : (
      <a
        href={`#${label}`}
        className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        onClick={onSelect}
        role="tab"
      >
        {label}
      </a>
    )}
  </li>
)

export default Tab
