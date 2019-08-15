import React from 'react';

// Outputs a list of users who are older than 20
const User = ({users, deleteUser}) => {
    const userlist = users.map(user => {
        return user.age > 20 ? <div className="card mb-3 mt-3" key={user.id}>
            <div className="card-body">
              <h4 className="card-title">
                 { user.name }
              </h4>
              <div className="card-text">
                  Name: { user.name }<br />
                  Age: { user.age }<br />
                  Job: { user.job }
              </div>
              <button className="btn btn-secondary btn-sm mt-3" onClick={() => {deleteUser(user.id)}}>Delete</button>
            </div>
          </div> : null
        })
    return ( 
      <div className="users">
      { userlist }
      </div>
    )
}
 
export default User;