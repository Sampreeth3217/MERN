import React from 'react'

const Userlist = ({ userList }) => {
    return (
        <div className='bs-tertiary text-light p-3'>
            <h1 className='text-center'>List of Users</h1>
            <table className='table table-dark  border-1 border-light-subtle'>
                <thead>
                    <tr>
                        <th scope='col'>Username</th>
                        <th scope='col'>Date of Birth</th>
                        <th scope='col'>City</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{user.username}</td>
                                <td>{user.dateofb}</td>
                                <td>{user.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Userlist