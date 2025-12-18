const express = require('express');
const getUsers = require('./getUsers.js');
// const getContent = require('./template.js') // LIVE REVIEW
const app = express();
const PORT = 3000;

// const specialtyFilter = (specialty) => usersData.filter(user => user.specialty === specialty); // LIVE REVIEW

app.get('/', (req, res) => {
  res.send(`
    <a href="/">Home</a>
    <a href="/developer">Developer</a>
    <a href="/marketing">Marketing</a>
    <a href="/qa">QA</a>
    <a href="/sales">Ventas</a>
    <h2>Home</h2>
    <p>Hola! Si quieres ver los usuarios por su especialidad, clica en el correspondiente botón del menú (☝️) o aquí abajo directamente 👇.</p>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/developer">Developer</a></li>
      <li><a href="/marketing">Marketing</a></li>
      <li><a href="/qa">QA</a></li>
      <li><a href="/sales">Ventas</a></li>
    </ul>
  `);
});

app.get('/developer', (req, res) => {
  res.send(`
    <a href="/">Home</a>
    <a href="/developer">Developer</a>
    <a href="/marketing">Marketing</a>
    <a href="/qa">QA</a>
    <a href="/sales">Ventas</a>
    <h2>Developer</h2>
    <p>Aquí te presento a nuestros developers, quienes hacen magia.</p>
    <div>${getUsers('developers')}</div>
    <p>Y si quieres ver el resto del equipo, clica en el correspondiente botón del menú.</p>
  `);
});

app.get('/marketing', (req, res) => {
  res.send(`
    <a href="/">Home</a>
    <a href="/developer">Developer</a>
    <a href="/marketing">Marketing</a>
    <a href="/qa">QA</a>
    <a href="/sales">Ventas</a>
    <h2>Marketing</h2>
    <p>Os presento a nuestro equipo de Marketing, quienes hacen unas campañas que ya les gustaría a Apple.</p>
    <p>Equipo:</p>
    <div>${getUsers('marketing')}</div>
    <p>Y si quieres ver el resto del equipo, clica en el correspondiente botón del menú.</p>
  `);
});

app.get('/qa', (req, res) => {
  res.send(`
    <a href="/">Home</a>
    <a href="/developer">Developer</a>
    <a href="/marketing">Marketing</a>
    <a href="/qa">QA</a>
    <a href="/sales">Ventas</a>
    <h2>QA</h2>
    <p>A continuación os presento a nuestros QA. Sin ellos, esta web y nuestros productos tendrían más bugs que el Amazonas.</p>
    <p>Equipo:</p>
    <div>${getUsers('QAs')}</div>
    <p>Y si quieres ver el resto del equipo, clica en el correspondiente botón del menú.</p>
  `);
});

app.get('/sales', (req, res) => {
  res.send(`
    <a href="/">Home</a>
    <a href="/developer">Developer</a>
    <a href="/marketing">Marketing</a>
    <a href="/qa">QA</a>
    <a href="/sales">Ventas</a>
    <h2>Ventas</h2>
    <p>Aquí te presento a nuestros equipo de ventas, que son tan buenos, que hasta venderían hielo en el Polo Norte.</p>
    <p>Equipo:</p>
    <div>${getUsers('ventas')}</div>
    <p>Y si quieres ver el resto del equipo, clica en el correspondiente botón del menú.</p>
  `);
});

// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇

/* app.get('/developer', (req, res) => {
  const specialty = "developers"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users));
});

app.get('/marketing', (req, res) => {
  const specialty = "marketing"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users));
});

app.get('/qa', (req, res) => {
  const specialty = "qas"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users));
});

app.get('/sales', (req, res) => {
  const specialty = "ventas"
  const users = specialtyFilter(specialty)
  res.send(getContent(specialty, users));
}); */

// ☝️ CODIGO DE LA LIVE REVIEW HASTA AQUÍ ☝️

app.use((req, res) => {
  res.status(404).send(`
    <h1>Página no encontrada</h1>
    <a href="/">Home</a>`);
  // res.status(404).json({error: 'page not found - 404'}) // De esta forma creamos API. Formateamos el texto para enviar un json con la info que necesitamos
  
});

app.listen(PORT, () => {
  console.log(`El servidor Express está escuchando en la URL: http://localhost:${PORT}`);
})