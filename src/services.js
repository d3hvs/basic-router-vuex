export const getUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())

export const getUserById = (id) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(data => data.json())