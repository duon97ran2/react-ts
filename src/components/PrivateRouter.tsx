import React from 'react'
import { Navigate } from 'react-router-dom';

type Props = {
  user: any;
  children: JSX.Element,
  role: 1 | 0;
}

const PrivateRouter = (props: Props) => {
  if (props.user === null) {
    return <Navigate to="/Login" replace />
  }
  else if (props.user?.role !== props.role) {
    return <Navigate to="/" replace />
  }

  return (
    props.children
  )
}

export default PrivateRouter