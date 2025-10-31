var panorama, viewer, container, infospot;

//obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#container_principal');
panorama = new PANOLENS.ImagePanorama('img/greece.jpg');

viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);


var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot1.position.set(0, 0, -500);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Las cataratas son gigantes geológicos en constante movimiento. La fuerza del agua erosiona la roca bajo ellas, haciendo que el borde de la cascada retroceda con el tiempo.', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Las cataratas son gigantes geológicos en constante movimiento. La fuerza del agua erosiona la roca bajo ellas, haciendo que el borde de la cascada retroceda con el tiempo.</div>';
panorama.add(infospot1);



// Crea y agrega el segundo infospot
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(1000, -100, 1000);
infospot2.addHoverText('Se estima que los humanos han explorado y cartografiado menos del 10% del fondo oceanico con detalle.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(66, 66, 80, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Se estima que los humanos han explorado y cartografiado menos del 10% del fondo oceanico con detalle.</div>';
panorama.add(infospot2);



// Crea y agrega el tercer infospot
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(-430, 50, -1000);
infospot3.addHoverText('Las cascadas más grandes del mundo se encuentran oculatas bajo el mar.', -60);
//insertar el reproductor de video de YouTube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/MfWyzrkFkg8?si=1zpkT_V-dJmKZa4P"></iframe>        
    </div>
`;

/*infospot3.element.innerHTML = '<div style="background-color: rgba(28, 134, 12, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La biblioteca multimedia ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video. Utilice la biblioteca multimedia para crear, ver, editar y administrar todo el contenido de audio y video.</div>';*/
panorama.add(infospot3);




// Crea y agrega el cuarto infospot con un ícono personalizado
var infospot4 = new PANOLENS.Infospot(200, 'img/info.png');
infospot4.position.set(-4500, -650, -3500);
//evento hover
infospot4.addHoverText('En cataratas de gran volumen y altura, la constante pulverización de agua que choca contra el aire crea las condiciones perfectas para que se formen arcoíris casi permanentes durante las horas de sol.', -60);
infospot4.element.innerHTML = '<div style="background-color: rgba(54, 90, 117, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">En cataratas de gran volumen y altura, la constante pulverización de agua que choca contra el aire crea las condiciones perfectas para que se formen arcoíris casi permanentes durante las horas de sol.</div>';
panorama.add(infospot4);


// Crea y agrega el quinto infospot
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot5.position.set(265, 30, 800);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot5.addHoverText('La palabra de "catarata" viene del griego (kataráktes), que se relaciona con "precipitarse', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(83, 99, 134, 1); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"> La palabra de "catarata" viene del griego (kataráktes), que se relaciona con "precipitarse. </div>';
panorama.add(infospot5);


// Crea y agrega el sexto infospot
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posición tridimensional del infospot dentro de la panorámica. Por ejemplo, x = 0, y = 0 y z = -500
infospot6.position.set(100, 50, 940);
//-60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot6.addHoverText('Un audio MP3 multimedial...', -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audios/audio2.m4a" type="audio/mpeg"></audio></div>';
panorama.add(infospot6);



