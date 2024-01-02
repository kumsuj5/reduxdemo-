import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './redux'
function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h5>UserContainer</h5>
    ) : userData.error ? (
        <h5>{userData.error}</h5>
    ) : (
        <div>
            <h2>User list</h2>
            <div>
                {userData &&
                    userData.users &&
                    userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {

        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)