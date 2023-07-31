import React from 'react'

import { Item } from '@/typing/Common'

import Tab, { ItemTab } from './Tab'

type Props = {
  items: Item[]
  onSelect: (item) => void
}

const Tabs = ({ items, onSelect }: Props) => {
  const [tabs, setTabs] = React.useState<ItemTab[]>([])
  const [indexTab, setIndexTab] = React.useState(0)
  React.useEffect(() => {
    const newTabs = items.map((item, index) => ({
      label: item.label,
      index,
      onSelect: () => {
        setIndexTab(index)
        onSelect(item)
      },
    }))
    setTabs(newTabs)
  }, [])
  return (
    <ul
      className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
      role="tablist"
      data-te-nav-ref
    >
      {tabs.map((item) => <Tab key={Math.random()} {...item} actived={indexTab} />)}
    </ul>
  )
}

export default Tabs
