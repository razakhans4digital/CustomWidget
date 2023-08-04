import React,{createElement} from 'react'

function Column({children}) {
  return (
    <div className="col-lg col-md col">{children}</div>
  )
}

export default Column;