/* Player video para Kiwilimon

  Loader general

  Escrito por: Phil
  Fecha: Julio 2016

  Control de cambios:
  2020-01-20: Phil, adaptación para player video
  01/06/2016: Phil, Creación
*/

KLVideo = {}
KLVideo.version = '1.0.0';
KLVideo.cdndomains = 'https://cdn.kiwilimon.com';
KLVideo.devel = false;

KLVideo.Loader = new function()
{
  var self = this;
  var loaded = false;
  var timeoutscan = null;

  function getVariable(index)
  {
    var $_GET = {};
    if(document.location.toString().indexOf('?') !== -1) {
        var query = document.location
                       .toString()
                       // get the query string
                       .replace(/^.*?\?/, '')
                       // and remove any existing hash string (thanks, @vrijdenker)
                       .replace(/#.*$/, '')
                       .split('&');

        for(var i=0, l=query.length; i<l; i++) {
           var aux = decodeURIComponent(query[i]).split('=');
           $_GET[aux[0]] = aux[1];
        }
    }
    return $_GET[index];
  }

  function loadexterncode(src, text, listener, cfasync)
  {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    if (text) s.text = text;
    if (cfasync != undefined)
      s.setAttribute("data-cfasync", cfasync);
    if (listener)
    {
      s.onload = listener;
      s.onreadystatechange = function() { if (this.readyState == 'complete') { listener(); } };
    }
    document.getElementsByTagName('head')[0].appendChild(s);
    return s;
  }

  function loadexterncss(src, listener, cfasync)
  {
    var s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('type','text/css');
    s.setAttribute('href', src);
    document.getElementsByTagName('head')[0].appendChild(s);
  }

  function cargaexterior()
  {
    loadexterncss("//unpkg.com/video.js/dist/video-js.css");
    loadexterncss("//unpkg.com/videojs-contrib-ads/dist/videojs-contrib-ads.css");
    loadexterncss(KLVideo.cdndomains + "/js/video/v1/ima.css");
    loadexterncss(KLVideo.cdndomains + "/js/video/v1/kiwi.css");
    loadexterncode("//unpkg.com/video.js/dist/video.min.js", '', videojsdone);
  }

  function videojsdone()
  {
    loadexterncode("//imasdk.googleapis.com/js/sdkloader/ima3.js", '', imadone);
  }

  function imadone()
  {
    loadexterncode("//unpkg.com/videojs-contrib-ads/dist/videojs.ads.min.js", '', contribadsdone);
  }

  function contribadsdone()
  {
    loadexterncode("//unpkg.com/videojs-ima/dist/videojs.ima.min.js", '', librariesloaded);
  }

  function librariesloaded()
  {
    loaded = true;
  }

  this.Scan = Scan;
  function Scan(force)
  {
    if (!loaded) {
      // scan all IDs and link
      if (KLVideo.devel)
        console.log("SCAN WAITING 50ms TO LOAD LIBRARIES");
      setTimeout(Scan, 50);
      return;
    }
    if (!force)
    {
      if (window.registrolistenerchef && !window.chefcode) // version PC V4, chef aun no hay llegado
      {
        if (KLVideo.devel)
          console.log("SCAN WAITING, REGISTER WAIT CHEF");
        window.registrolistenerchef("video", Scan)
        // 1 sec timeout to force the video (in case of listener does not work)
        timeoutscan = setTimeout(function() { Scan(true); }, 1000);
        return;
      }
      // mobile

      // amp && IA does not have chef to load
    }
    if (timeoutscan)
      clearTimeout(timeoutscan);

    // scan all IDs and link
    if (KLVideo.devel)
      console.log("SCANNING VIDEO TAGS");
    var videos = document.getElementsByClassName('video-js');
    if (videos)
    {
      for (var i = 0; i < videos.length; i++)
      {
        Link(videos[i].id);
      }
    }
  }

  this.Link = Link
  function Link(playerid)
  {
    if (KLVideo.devel)
      console.log("LINKING", playerid);

    // verifica contra cliente PRO para saber si hay ads
    myPlayer = videojs(playerid);

    var clientcode = window.chefcode;
    if (!clientcode && window.KL)
      clientcode = window.KL.chef || window.KL.client;
    pro = false;
    if (clientcode && clientcode.chef && clientcode.chef.p)
      pro = true;
    if (clientcode && clientcode.client && clientcode.client.p)
      pro = true;
    if (!pro && window.KL && window.KL.Modules && window.KL.Modules.client)
    {
      pro = window.KL.Modules.client.clientpro;
    }
    if (!pro && window.KL && window.KL.pagedata && window.KL.pagedata.page && (window.KL.pagedata.page.noad || window.KL.pagedata.page.novideoad))
      pro = true

    console.log("video pro:", pro)
    node = document.getElementById(playerid);
    if (node.getAttribute("ads") == "no")
      pro = true;

    if (node.getAttribute("origin"))
      origin = node.getAttribute("origin");
    else
      origin = getVariable("origin");
    if (!origin)
      origin = "";

    if (!pro)
    {
      if (KLVideo.devel)
        console.log("AD ACTIVATED, NO PRO", clientcode);
      myPlayer.ima({
        id: playerid,
        adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480|400x300|300x250|400x300|640x480|300x250&iu=/3879499/k4_videos_pre-roll&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&url=[referrer_url]&description_url=kiwilimon.com&correlator=[timestamp]'
      });
      if (origin == "mobile")
        myPlayer.ima.initializeAdDisplayContainer();
    } else {
      if (KLVideo.devel)
        console.log("USER PRO, NO AD ACTIVATED", clientcode);
    }

    myPlayer.ready(function() {
      ga('send', 'event', 'video', 'vid/player'+origin, 'vid/pla/print', null);

     myPlayer.on('fullscreenchange', function(e) {
         if (myPlayer.isFullscreen()) {
           // log the event
           ga('send', 'event', 'video', 'vid/player'+origin, 'vid/pla/fullon', null);
         } else {
           // log the event
           ga('send', 'event', 'video', 'vid/player'+origin, 'vid/pla/fulloff', null);
         }
       });
     myPlayer.on('play', function(e) { ga('send', 'event', 'video', 'vid/player'+origin, 'vid/pla/play', null); });
     myPlayer.on('pause', function(e) { ga('send', 'event', 'video', 'vid/player'+origin, 'vid/pla/pause', null); });
    });
  }

  if (KLVideo.devel)
    console.log("EMPEZANDO CARGA EXTERIOR");
  cargaexterior();

  if (window.KL && window.KL.pageloaded)
  {
    Scan();
  }
  else
  {
    window.addEventListener('load', function(e) {
      if (KLVideo.devel)
        console.log("ONLOAD ACTIVATED FOR A SCAN");
      Scan();
    });
  }
}();
