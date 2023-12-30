import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div  style={{
        width:"100%",
        padding:"10px",
        backgroundColor:"orangered",
        color:"white",
        marginBottom:20,
        textAlign:"center",
        textTransform:"uppercase"
        

    }
 }>
    {children}
  </div>
  )
}

export default ErrorMessage
