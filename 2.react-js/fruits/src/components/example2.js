import React from 'react';

function Example2() {
    const user = {
        firstName: 'Nhan',
        lastName: 'Nguyen',
    }
    function greeting(user) {
        if (user) {
            return <h1>Xin chào {formatName(user)}</h1>
        } else {
            return <h1>Xin chào người lạ!</h1>
        }
    }
    const user1 = greeting(user);
    const user2 = greeting(null);
    function formatName(user) {
        return `${user.firstName} ${user.lastName}`;
    }
    return (
        <>
            User name: {formatName(user)};
            {user1}
            {user2}
        </>
    )
}
export default Example2;