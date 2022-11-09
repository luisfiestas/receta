
/*
  Herramientas para manejar herramientas del usuario en el sitio
  Escrito por: Phil
  Fecha: Diciembre 2014
  
  Control de cambios:
  09/01/2015: Phil, agregar eventos analytics
  13/01/2015: Fernando, agregar eventos analytics
  
*/

function abrirlistacolecciones()
{
  WA.toDOM('lista_colecciones').style.display = 'block';
  var request = WA.Managers.ajax.createRequest('/listeners/getcolecciones', 'POST', 'tipo=listapopup', getabrirlistacolecciones, true);
}

function getabrirlistacolecciones(request)
{
  WA.toDOM('lista_colecciones').innerHTML = request.responseText;
}

function cerrarlistacolecciones()
{
  WA.toDOM('lista_colecciones').style.display = 'none';
}

function cerrartutorialcolecciones()
{
  WA.toDOM('bgtutorialcolecciones').style.display = 'none';
  /* WA.toDOM('tutorialcolecciones').style.display = 'none'; */
}

function abrirtutorialcolecciones()
{
  WA.toDOM('bgtutorialcolecciones').style.display = 'block';
  /* WA.toDOM('tutorialcolecciones').style.display = 'block'; */
}

function cerrartutorialmenus()
{
  WA.toDOM('bgtutorialmenus').style.display = 'none';
  WA.toDOM('tutorialmenus').style.display = 'none';
}

function abrirtutorialmenus(request)
{
  if (request==1)
  {
    var prueba30dias = WA.toDOM('galeria-tour-dpm4');
    if (prueba30dias)
      prueba30dias.parentNode.removeChild(prueba30dias);
    
    var bullet = WA.toDOM('bullet_4');
    if (bullet)
      bullet.parentNode.removeChild(bullet);
  }
  WA.toDOM('bgtutorialmenus').style.display = 'block';
  WA.toDOM('tutorialmenus').style.display = 'block';  
}

function abrircreacoleccion()
{
  agregarnuevalista(null, null);
}

function abrirherramientasmb()
{
  WA.toDOM('lista_herramientasmb').style.display = 'block';
}

function cerrarherramientasmb()
{
  WA.toDOM('lista_herramientasmb').style.display = 'none';
}

function verlistacolecciones()
{
  if (WA.toDOM('cheflistas_container'))
    var request = WA.Managers.ajax.createRequest('/listeners/getcolecciones', 'POST', 'tipo=lista', getverlistacolecciones, true);
}

function getverlistacolecciones(request)
{
  WA.toDOM('cheflistas_container').innerHTML = request.responseText;
}

var chefsiguiendoparaborrar = null;

function borrarChefSiguiendo(clave)
{
  chefsiguiendoparaborrar = clave;
  confirma(WA.i18n.getMessage("txtborrarChefSiguiendo"), WA.i18n.getMessage("txtherramientas1"), WA.i18n.getMessage("txtherramientas2"), dejandodeseguir);
}


var coleccionparaborrar = null;
function borrarcoleccion(clave)
{
  coleccionparaborrar = clave;
  confirma(WA.i18n.getMessage("txtborrarcoleccion"), WA.i18n.getMessage("txtherramientas1"), WA.i18n.getMessage("txtherramientas2"), doborrarcoleccion);
}

function doborrarcoleccion(id)
{
  if (id == 1)
  {
    var request = WA.Managers.ajax.createRequest('/listeners/docoleccion', 'POST', 'orden=borrar', getborrarcoleccion, false);
    request.addParameter('clave', coleccionparaborrar);
    request.send();
  }
  coleccionparaborrar = null;
}

function getborrarcoleccion(request)
{
  var code = WA.JSON.decode(request.responseText);
  if (code.estatus == 'OK')
  {
    ga('send', 'event', 'usuario', 'usu/coleccion', 'usu/col/eliminacoleccion', 0);

    notifica(WA.i18n.getMessage("txtgetborrarcoleccion"));
    verlistacolecciones();
  }
  else
  {
    ga('send', 'event', 'usuario', 'usu/coleccion', 'usu/col/erroreliminacoleccion', 0);
    alerta(code.mensaje);
  }
  
}

var coleccionvisible = null;
var objetocolecciontipoparaborrar = null;
var objetocoleccionclaveparaborrar = null;

function borrarobjetocoleccion(tipo, clave)
{
  objetocolecciontipoparaborrar = tipo;
  objetocoleccionclaveparaborrar = clave;
  confirma(WA.i18n.getMessage("txtborrarobjetocoleccion"), WA.i18n.getMessage("txtherramientas1"), WA.i18n.getMessage("txtherramientas2"), doborrarobjetocoleccion);
}

function doborrarobjetocoleccion(id)
{
  if (id == 1)
  {
    var request = WA.Managers.ajax.createRequest('/listeners/docoleccion', 'POST', 'orden=borrarobjeto', getborrarobjetocoleccion, false);
    request.addParameter('coleccion', coleccionvisible);
    request.addParameter('tipo', objetocolecciontipoparaborrar);
    request.addParameter('clave', objetocoleccionclaveparaborrar);
    request.send();
  }
  objetocolecciontipoparaborrar = null;
  objetocoleccionclaveparaborrar = null;
}

function getborrarobjetocoleccion(request)
{
  var code = WA.JSON.decode(request.responseText);
  if (code.estatus == 'OK')
  {
    ga('send', 'event', 'usuario', 'usu/coleccion', 'usu/col/eliminarobjetodecoleccion', 0);
    notifica('Se ha borrado con éxito');
    vercoleccion(coleccionvisible);
  }
  else
  {
    ga('send', 'event', 'usuario', 'usu/coleccion', 'usu/col/erroreliminarobjetodecoleccion', 0);
    alerta(code.mensaje);
  }
  
}

function vercoleccion(clave)
{
  var request = WA.Managers.ajax.createRequest('/listeners/getcolecciones', 'POST', null, getvercoleccion, false);
  request.addParameter('tipo', 'coleccion');
  request.addParameter('coleccion', clave);
  request.send();
  coleccionvisible = clave;
}

function getvercoleccion(request)
{
  WA.toDOM('cheflistas_container').innerHTML = request.responseText;
  cargaImagenes('postload');
}

var nodemodificaroriginal = null;
var nodemodificarcoleccion = null;
var clavemodificarcoleccion = null;

function modificarcoleccion(clave)
{
  if (nodemodificarcoleccion)
    return;

  nodemodificaroriginal = WA.toDOM('nombrecoleccion_' + clave).innerHTML;
  nodemodificarcoleccion = WA.createDomNode('input', 'campomodificarcoleccion', null);
  nodemodificarcoleccion.type = 'text';
  nodemodificarcoleccion.value = nodemodificaroriginal;
  nodemodificarcoleccion.onblur = blurmodificarcoleccion;
  nodemodificarcoleccion.onkeydown = keymodificarcoleccion;
  clavemodificarcoleccion = clave;
  
  WA.toDOM('nombrecoleccion_' + clave).innerHTML = '';
  WA.toDOM('nombrecoleccion_' + clave).appendChild(nodemodificarcoleccion);
  nodemodificarcoleccion.focus();
}

function blurmodificarcoleccion(event)
{
  var valor = nodemodificarcoleccion.value;
  WA.toDOM('nombrecoleccion_' + clavemodificarcoleccion).innerHTML = valor;
  
  // Llamar ajax de modificar
  var request = WA.Managers.ajax.createRequest('/listeners/docoleccion', 'POST', 'orden=modificar', getmodificarcoleccion, false);
  request.addParameter('clave', clavemodificarcoleccion);
  request.addParameter('nombre', WA.UTF8.encode(valor));
  request.send();
  
  nodemodificaroriginal = null;
  nodemodificarcoleccion = null;
  clavemodificarcoleccion = null;
}

function keymodificarcoleccion(event)
{
  var keyCode = ('which' in event) ? event.which : event.keyCode;
  if (keyCode == 13)
    blurmodificarcoleccion(event);
  if (keyCode == 27)
  {
    nodemodificarcoleccion.value = nodemodificaroriginal;
    blurmodificarcoleccion(event);
  }
}

function getmodificarcoleccion(request)
{
  var code = WA.JSON.decode(request.responseText);
  if (code.estatus == 'OK')
  {
    ga('send', 'event', 'usuario', 'usu/coleccion', 'usu/col/cambiarnombre', 0);
    notifica(WA.i18n.getMessage("txtgetmodificarcoleccion"));
  }
  else
  {
    ga('send', 'event', 'usuario', 'usu/coleccion', 'usu/col/errorcambiarnombre', 0);
    alerta(code.mensaje);
  }
}

/* Busqueda en las colecciones */

function keyupbuscaencoleccion()
{
  setTimeout(buscaencoleccion, 0);
}

function buscaNodeObjetoColeccion(node)
{
  var pnode = node;
  while (pnode.parentNode && pnode.parentNode != document)
  {
    pnode = pnode.parentNode;
    if (pnode.className == 'lista_iconos divicon_colecciones')
      return pnode;
  }
  return null;
}

function buscaencoleccion()
{
  var filtro = WA.toDOM('filtrobuscaencoleccion').value;
  var categoria = WA.toDOM('filtrocategoriacoleccion').value;
  
  // filtra con estos dos valores
  var objetosNodes = document.getElementsByClassName('nombrecuadrocoleccion');
  if (objetosNodes)
  {
    for (var i = 0, l = objetosNodes.length; i < l; i++)
    {
      var contenedor = buscaNodeObjetoColeccion(objetosNodes[i]);
      if (!contenedor)
        continue;
      if (!filtro && !categoria)
        contenedor.style.display = 'block';
      else
      {
        var visto = true;
        if (objetosNodes[i].innerHTML.toLowerCase().indexOf(filtro.toLowerCase())>-1)
          visto = true;
        else
          visto = false;
        if (categoria)
        {
          var c = objetosNodes[i].getAttribute("clasificacion");
          if (c == categoria)
            visto &= true;
          else
            visto = false;
        }
        contenedor.style.display = visto?'block':'none';
      }
    }
  }
}

function popularfecha(iddia, idmes, idano, selectdia, selectmes, selectano)
{
  
  var f = new Date();
  //document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());

  var node = WA.toDOM(iddia);
  node.options.length = 0;
  for (var i = 1; i < 32; i++)
  {
    node.options.add(new Option(i, i));
  }
  if (selectdia)
    node.value = selectdia;
  node = WA.toDOM(idmes);
  node.options.length = 0;
  for (var i = 1; i < 13; i++)
  {
    node.options.add(new Option(i, i));
  }
  if (selectmes)
    node.value = selectmes;
  node = WA.toDOM(idano);
  node.options.length = 0;
  for (var i = -1; i > -100; i--)
  {
    node.options.add(new Option(i + f.getFullYear(), i + f.getFullYear()));
  }
  if (selectano)
    node.value = selectano;
}

function switchdiv(id)
{
  var node = WA.toDOM(id);
  if (node.style.display == 'none')
    node.style.display = '';
  else
    node.style.display = 'none';
}
function switchdivinfo(id, iddiv)
{
  var node = WA.toDOM(iddiv);
  if (node.style.display == 'none')
  {
    node.style.display = '';
	WA.toDOM(id).className = 'modo-exp';
  }
  else
  {
    node.style.display = 'none';
	WA.toDOM(id).className = 'modo-comp';
  }
}

function comprar()
{
  var ing = getingredientes('');
  if (ing.length > 0)
  {
    var request = WA.Managers.ajax.createRequest('/listeners/docomprar', 'POST', 'p=' + ing, getjsonsuperama, true);
  }
}

var v_ingrediente = null;
function popcomprar()
{
  var ing = getingredientes('pop');
  if (ing.length > 0)
  {
  
    v_ingrediente = ing;
    confirma('Gracias por comprar estos ingredientes.\nCuando confirmas ganarás 5 puntos, y estarás redirigido al sitio de Superama.\nSigue participando para ganar el Reto Kiwilimón.', 'Confirmar', 'Cancelar',getjsonsuperama);
    
  }
}

function getjsonsuperama(id)
{
  if (id == 1)
  {
    WA.Managers.ajax.createRequest('/listeners/docomprar', 'POST', 'p=' + v_ingrediente, popsuperamarespuesta, true);
  }
  v_ingrediente = null;
}


function popsuperamarespuesta(request)
{
  var code = WA.JSON.decode(request.responseText); 

  if (code.estatus == 'OK')
  {
    ga('send', 'event', 'usuario', 'usu/receta', 'usu/rec/compraingredientes', 0);
    WA.toDOM('sup_ing').value = request.responseText;
    WA.toDOM('test_modal').submit();
    WA.Managers.ajax.createRequest('/doreto', 'POST', 'orden=superama', null, true);
  }
  else
  {
    ga('send', 'event', 'usuario', 'usu/receta', 'usu/rec/errorcompraingredientes', 0);
    alerta(code.mensaje);
  }

}

function getingredientes(preid)
{
  if (preid == undefined)
    preid = '';
  var ing = [];
  for (var i = 1; i < 1000; i ++)
  {
    var xlista = WA.toDOM(preid + 'listaingredientes_'+i);
    if (!xlista)
      break;
    if (xlista.checked)
      ing.push(xlista.value);
  }
  return ing;
}

var v_ingrediente = null

function compraringredientes()
{
  var ing = getingredientes();
  if (ing.length == 0)
    seleccionartodos(true);
  ing = getingredientes();
  if (ing.length > 0)
  {
    v_ingrediente = ing;
    
    confirma('Gracias por comprar estos ingredientes.\nCuando confirmas ganarás 5 puntos, y estarás redirigido al sitio de Superama.\nSigue participando para ganar el Reto Kiwilimón.', 'Confirmar', 'Cancelar', docomprar);
  }
}

function docomprar(id)
{
  if (id == 1)
  {
    WA.Managers.ajax.createRequest('/listeners/docomprar', 'POST', 'p=' + v_ingrediente, respuestacompra, true);
  }
  
  v_ingrediente = null;
}

function respuestacompra(request)
{
  var code = WA.JSON.decode(request.responseText); 

  if (code.estatus == 'OK')
  {
    ga('send', 'event', 'usuario', 'usu/receta', 'usu/rec/compraingredientes', 0);

    WA.toDOM('sup_ing').value = request.responseText;
    WA.toDOM('test_modal').submit();
    WA.Managers.ajax.createRequest('/doreto', 'POST', 'orden=superama', null, true);
  }
  else
  {
    ga('send', 'event', 'usuario', 'usu/receta', 'usu/rec/errorcompraingredientes', 0);
    alerta(code.mensaje);
  }
}

// zoom fotos

var background = null;
var modal = null;

function zoom(link)
{
  // 1. put the modal background
  if (!background)
  {
    background = WA.createDomNode('div', 'lightbg', 'modalbg');
    document.body.appendChild(background);
    WA.Managers.event.on('click', background, closezoom, true);
  }
  background.style.display = 'block';
  background.style.height = WA.browser.getDocumentHeight() + 'px';

  if (!modal)
  {
    modal = WA.createDomNode('div', 'light', 'modal');
    background.appendChild(modal);
  }

  WA.browser.setInnerHTML(modal, '<div id="modalloader" style="padding: 15px; background-color: white; width: 120px; height: 30px; position: absolute; left: -60px; top: -30px;"><img src="/images/ajax-loading.gif" style="vertical-align: middle;" alt="" title="" /> <b>Cargando...</b></div><div id="modalcontainer" class="gradient-green open"  style="border: 5px solid #c2dfaf; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; padding: 10px; background-color: white; position: absolute; visibility: hidden; overflow: auto; opacity: 0; filter: alpha(opacity: 0); min-width: 400px; min-height: 200px; text-align: center;"><div style="text-align: right;">Haz click en cualquier lugar para cerrar la imagen</div><img id="modalimg" style="max-width: 800px; max-height: 600px;" src="'+link+'" alt="" title="" /></div>');

  adjustsize();
}

function adjustsize()
{
  var width = WA.browser.getNodeWidth(WA.toDOM('modalimg'));
  if (!(width > 50))
  {
    setTimeout(adjustsize, 100);
    return;
  }
  width += 40;

  var widthmax = WA.browser.getWindowWidth() - 100;
  var heightmax = WA.browser.getWindowHeight() - 100;
  var height = WA.browser.getNodeHeight(WA.toDOM('modalimg')) + 50;
  if (height > heightmax)
  {
    height = heightmax;
    width += 30;
  }
  if (width > widthmax)
  {
    width = widthmax;
    height += 30;
  }

  // 1. move vertical
  // 2. move horizontal
  WA.Managers.anim.createSprite('zoom', 'modalloader', fades, {autostart:true, loop:false, chain: [{type:'move',time:400,xinit:-60,xend:-60,yinit:-30,yend:-(height/2),winit:120,wend:120,hinit:30,hend:height-30}, {type:'move',time:300,xinit:-60,xend:-(width/2),yinit:-(height/2),yend:-(height/2),winit:120,wend:width-30,hinit:height-30,hend:height-30}]});

  WA.toDOM('modalcontainer').style.width = width+'px';
  WA.toDOM('modalcontainer').style.height = height+'px';
  WA.toDOM('modalcontainer').style.left = -(width/2)+'px';
  WA.toDOM('modalcontainer').style.top = -(height/2)+'px';
}

function fades()
{
  WA.Managers.anim.createSprite('zoom1', 'modalloader', null, {autostart:true, loop:false, chain: [{type:'move', time:500, tinit:100, tend: 0}]});
  WA.Managers.anim.createSprite('zoom2', 'modalcontainer', null, {autostart:true, loop:false, chain: [{type:'move',time:500, tinit:0, tend:100}]});
  WA.toDOM('modalcontainer').style.visibility = '';
}

function closezoom()
{
  background.style.display = 'none';
  // empty the modal
  WA.browser.setInnerHTML(modal, '');
}

function imgmover(id)
{
  WA.toDOM(id).style.display = 'block';
}

function imgmout(id)
{
 WA.toDOM(id).style.display = 'none';
}

function doEregistro()
{
  var usuario = WA.toDOM('Eregistrousuario').value;
  if (!usuario || usuario == '')
  {
    errorlogin('Eregistrousuario', 'No capturaste ningun correo electrónico');
    return;
  }
  else
    limpiacampo('Eregistrousuario');
  var contrasena = WA.toDOM('Eregistrocontrasena').value;
  var contrasena2 = WA.toDOM('Eregistrocontrasena2').value;
  var nombre = WA.toDOM('Eregistronombre').value;
  if (!nombre || nombre == '')
  {
    errorlogin('Eregistronombre', 'No capturaste ninguna nombre');
    return;
  }
  else
    limpiacampo('Eregistronombre');
  var apellido = WA.toDOM('Eregistroapellido').value;
  if (!apellido || apellido == '')
  {
    errorlogin('Eregistroapellido', 'No capturaste ninguna nombre');
    return;
  }
  else
    limpiacampo('Eregistroapellido');
    
  var dia = WA.toDOM('Eregistrodia').value;
  var mes = WA.toDOM('Eregistromes').value;
  var ano = WA.toDOM('Eregistroano').value;
  var sexo = WA.toDOM('Eregistrosexo').value;
  var newsletter = WA.toDOM('Eregistronewsletter').checked;

  var request = WA.Managers.ajax.createRequest('/listeners/dologin', 'POST', null, getEregistro, false);
  request.addParameter('usuario', WA.UTF8.encode(usuario));
  request.addParameter('contrasena', WA.UTF8.encode(contrasena));
  request.addParameter('contrasena2', WA.UTF8.encode(contrasena2));
  request.addParameter('nombre', WA.UTF8.encode(nombre));
  request.addParameter('apellido', WA.UTF8.encode(apellido));
  request.addParameter('dia', WA.UTF8.encode(dia));
  request.addParameter('mes', WA.UTF8.encode(mes));
  request.addParameter('ano', WA.UTF8.encode(ano));
  request.addParameter('sexo', WA.UTF8.encode(sexo));
  request.addParameter('newsletter', newsletter);
  request.addParameter('orden', 'modificar');
  request.send();
}

function getEregistro(request)
{
  if (request.responseText.substr(0, 2) == 'OK')
  {
    notifica('Gracias. Tus datos se han modificado con éxito');
  }
  else
  {
     // poner los errores en los campos
    errorlogin('Eregistrousuario', request.responseText);
  }
}

