import React, { FC, ReactNode } from 'react'

interface ListProps {
  children: children[]
  className?: string
}

type children = {
  child?: ReactNode
  label: string
  href?: string
}

const List: FC<ListProps> = ({ children, className }) => {
  return (
    <ul className={className}>
      {children.map((child, index) =>
        index === 0 ? (
          <h3>{(child.label, child.child)}</h3>
        ) : (
          <li>
            {child.href ? <a href={child.href}>{child.label}</a> : child.label}
          </li>
        )
      )}
    </ul>
  )
}

export default List
