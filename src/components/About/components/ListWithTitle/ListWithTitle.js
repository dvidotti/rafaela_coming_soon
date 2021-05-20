import React from 'react'

import './ListWithTitle.css'

const ListWithTitle = (props) => {
  const {block} = props;
  const key = Object.keys(block)[0]

  return(
    <div>
      <div className="border-top-bottom">{key}</div>
      <div className="list-container">
        {block[key].map((i,idx) => 
          <p key={idx}>{i}</p>
        )}
      </div>
    </div>
  )
}

export default ListWithTitle;