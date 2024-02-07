import React from 'react'

const Comments = () => {
    const list=[
        {name:"Moahmed" ,com:"vivia css"},
        {name:"Adel" ,com:"vivia EST"},
        
    ]
  return (
    <div className='com'>
        {
            list.map(el=><div>
            <h4>{el.name}</h4>
            <h6>{el.com}</h6></div>)
        }
    </div>
  )
}

export default Comments