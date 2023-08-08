const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80,
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
  },
];



const propContainer = document.querySelector(".propiedades");
const propJSON = propiedadesJSON.slice();
const buscarButton = document.querySelector(".btn.btn-warning");


function propiedadesHTML(propiedad) {
  return `
    <div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
        <h5>${propiedad.name}</h5>
        <div class="d-flex justify-content-between">
          <p>Cuartos: ${propiedad.rooms}</p>
          <p>Metros: ${propiedad.m}</p>
        </div>
        <p class="my-3">${propiedad.description}</p>
        <button class="btn btn-info">Ver más</button>
      </section>
    </div>
  `;
}


for (let i = 0; i < propiedadesJSON.length; i++) {
  const propiedad = propiedadesJSON[i];
  const htmlPropiedad = propiedadesHTML(propiedad);
  propContainer.innerHTML += htmlPropiedad;
}





buscarButton.addEventListener("click", function () {
  
  const cuartosInput = document.getElementById("cuartosInput").value;
  const metrosDesdeInput = document.getElementById("metrosDesdeInput").value;
  const metrosHastaInput = document.getElementById("metrosHastaInput").value;

  
  if ( cuartosInput === "" || metrosDesdeInput === "" ||  metrosHastaInput === "" ) {
    
    alert("Faltan campor por llenar");

  } else {
    
    const propiedadesFiltradas = propJSON.filter( (propiedad) =>
        propiedad.rooms >= parseInt(cuartosInput) &&
        propiedad.m >= parseInt(metrosDesdeInput) &&
        propiedad.m <= parseInt(metrosHastaInput)
    );

    
    document.getElementById("totalPropiedades").textContent =
      propiedadesFiltradas.length;

    
    let htmlPropiedadesFiltradas = "";
    for (let i = 0; i < propiedadesFiltradas.length; i++) {
      const propiedad = propiedadesFiltradas[i];
      htmlPropiedadesFiltradas += propiedadesHTML(propiedad);
    }
    propContainer.innerHTML = htmlPropiedadesFiltradas;
  }
});


const limpiarButton = document.getElementById("limpiarBusqueda");


limpiarButton.addEventListener("click", function () {
  document.getElementById("cuartosInput").value = "";
  document.getElementById("metrosDesdeInput").value = "";
  document.getElementById("metrosHastaInput").value = "";

  propContainer.innerHTML = ""; 

  for (let i = 0; i < propJSON.length; i++) {
    const propiedad = propJSON[i];
    const htmlPropiedad = propiedadesHTML(propiedad);
    propContainer.innerHTML += htmlPropiedad;
  }
  document.getElementById("totalPropiedades").textContent =
    propJSON.length;
});