const usersData = require('./usersData');

function getUsers(spec) {
  const usersFilter = usersData.filter(user => user.specialty === spec);
  const getUsers = usersFilter.map((user) => {
    const template = `
    <ul>  
      <li>Nombre: ${user.name}</li>
      <li>Edad: ${user.age}</li>
      <li>Función: ${user.specialty}</li>
    </ul>
    `
    return template;
  }).join('')
  return getUsers;
}

// console.log('Ventas: ', getUsers('ventas'));
// console.log('Developers: ', getUsers('developers'));
// console.log('QAs: ', getUsers('QAs'));
// console.log('Marketing: ', getUsers('marketing'));

module.exports = getUsers ;