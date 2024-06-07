import React, { useEffect } from 'react'

const SinglePage = () => {
  useEffect(()=>{
    window.scrollTo({
      top : 0,
      behavior : "smooth"
    })
  },[])
  return (
    <div>SinglePage</div>
  )
}

export default SinglePage