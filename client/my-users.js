import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUsername, getUserData } from './redux/reducers/users'

const Users = () => {
  const name = useSelector((s) => s.users.name)
  const repoList = useSelector((s) => s.users.list)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserData())
  }, [])

  return (
    <div>
      <input
        type="text"
        className="order-black border-2"
        onChange={(e) => {
          dispatch(updateUsername(e.target.value))
        }}
        value={name}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(getUserData())
          }
        }}
      />
      {repoList.map(it => {
        return <div key="name">{ it.name }</div>
      })}
    </div>
  )
}

export default Users