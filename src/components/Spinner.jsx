import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({loading}) => {
  return (
   <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ClipLoader color="#36d7b7" loading={loading} size={50} />
    </div>
  )
}

export default Spinner
