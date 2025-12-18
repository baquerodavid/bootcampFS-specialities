const getContent = (specialty, users) => {
  const template = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${specialty}</title>
      </head>
      <body>
        <a href="/">Home</a>
        <a href="/developer">Developer</a>
        <a href="/marketing">Marketing</a>
        <a href="/qa">QA</a>
        <a href="/sales">Ventas</a>
        <h1>${specialty}</h1>
        <p>Número de personas: ${users.length}</p>
        <ul>
          ${users.map(user => `<li><h2>${user.name}</h2><p>${user.age}</p></li>`).join('')}
        </ul>
      </body>
    </html>
    `
  return template
}

module.exports = getContent;