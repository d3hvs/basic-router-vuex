export const getUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())