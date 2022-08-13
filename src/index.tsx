import React, { FC, ReactNode } from 'react'

interface ListProps {
  items: (string | itemObject)[]
  className?: string
}

interface itemObject {
  item: string
  child: ReactNode
}

const List: FC<ListProps> = ({ items, className }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => {
        if (typeof item === 'object') {
          if (index === 0) {
            return (
              <h3 key={index}>
                {item.item} {item.child}
              </h3>
            )
          } else {
            return (
              <li key={index}>
                {item.item} {item.child}
              </li>
            )
          }
        } else {
          if (index === 0) {
            return <h3 key={index}>{item}</h3>
          } else {
            return <li key={index}>{item}</li>
          }
        }
      })}
    </ul>
  )
}

export default List
