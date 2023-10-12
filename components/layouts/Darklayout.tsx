import { FC, PropsWithChildren } from 'react'

export const Darklayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        color: 'blue',
        borderRadius: '.4rem',
        padding: '10px',
      }}
    >
      <span>Dark layout</span>
      {children}
    </div>
  )
}
