const express = require("express");
const hbs = require("hbs");
const app = express();

//HANDLEBARS
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//sERVIR CONTENIDO ESTATICO
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("Home", {
    nombre: "Brandon",
    titulo: "Curso Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("Generics", {
    nombre: "Brandon",
    titulo: "Curso Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("Elements", {
    nombre: "Brandon",
    titulo: "Curso Node",
  });
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Aplicacion funcionando`);
});
