import React from 'react'

const editAction = () => {
  return (
    <div>
        
        <button className="btn btn-primary" onClick={() => handleEdit(Subject.id)}>Edit</button>
    </div>
  )
}

export default editAction