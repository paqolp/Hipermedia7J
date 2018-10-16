$(document).ready(function(){async function a(f){$.getJSON(e,function(g){let h='';$.each(g.events[f].assistants,function(i,j){'undefined'==j||null==j?h='<li class="collection-item">No hay asistentes registrados.</li>':h+='<li class="collection-item">'+j.name+'</li>'}),$('#assistants').append(h)})}async function b(f){$.getJSON(e,function(g){let h='';$.each(g.events[f].activities,function(i,j){'undefined'==j||null==j?h='<p>No se han registrado actividades para este evento</p>':h+='<div class="col s12 m6 l3"><p>'+j.name+' - '+j.place+' - '+j.time+'</p></div>'}),$('#activities').append(h)})}function c(){let f={};return f.id=d.events.length+1,f.name=$('#event_name').val(),f.address=$('#event_address').val(),f.city=$('#event_city').val(),f.date=$('#event_date').val(),f.datetime=$('#event_datetime').val(),f.price=$('#event_price').val(),f.description=''==$('#event_description').val()?'Sin descripci\xF3n':$('#event_description').val(),f.publisher=$('#event_publisher').val(),f.assistants=[{}],f.activities=[{}],f}$('.datepicker').datepicker(),$('.timepicker').timepicker(),$('.carousel').carousel(),$('.sidenav').sidenav(),$('.materialboxed').materialbox(),$('.modal').modal(),$('.collapsible').collapsible(),$('.carousel.carousel-slider').carousel({fullWidth:!0,indicators:!0});var d,e='https://api.myjson.com/bins/1bmz2g';$(function(){$.ajax({url:e,type:'GET',contentType:'application/json; charset=utf-8',dataType:'json',success:function(f){d=f},error:function(){}})}),$(function(){0<$('body.main').length&&$.getJSON(e,function(f){let g='';$.each(f.events,function(h,i){g+='<div id="" class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+i.image+'"></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+i.name+'<i class="material-icons right">more_vert</i></span><p><a id="redirect_event" href="discover_event.html?id='+(i.id-1)+'">Ver evento</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+i.name+'<i class="material-icons right">close</i></span><p>'+i.description+'</p></div></div>'}),$('.card-container').append(g)})}),setTimeout(()=>{$(function(){if(0<$('body.event-discover').length){let f=parent.document.URL.substring(parent.document.URL.indexOf('=')+1,parent.document.URL.length);if('undefined'===d.events)M.toast({html:'Hubo en error. Por favor recargue la p\xE1gina.'});else{let g=d.events,h='<div class="row" id='+f+'><div class="col s12 m12 l7"><img class="materialboxed event-img" src="'+g[f].image+'"></div><div class="row"><div class="col s12 m12 l5"><div class="col s12 m4 l5"><p id="event_name"><strong>Nombre: <br></strong>'+g[f].name+'</p></div><div class="col s12 m4 l5"><p id="event_address"><strong>Direcci\xF3n: <br></strong>'+g[f].address+'</p></div><div class="col s12 m4 l5"><p id="event_date"><strong>Fecha: </strong><br>'+g[f].date+', '+g[f].datetime+'</p></div><div class="col s12 m4 l5"><p id="event_publisher"><strong>Publicado por: </strong><br>'+g[f].publisher+'</p></div><div class="col s12 m4 l5"><p id="event_price"><strong>Precio: </strong> '+('0'===g[f].price?'Gratis':'$'+g[f].price)+'</p></div></div><a class="waves-effect waves-light btn-small modal-trigger light-green lighten-1" href="#editInfoModal">Editar informaci\xF3n</a></div></div><div class="row"><div class="col s12 m12 l7"><p id="event_description"><strong>Descripci\xF3n: <br></strong> '+g[f].description+'</p></div></div><div class="row"><h5>Actividades</h5><div id="activities"></div></div><a class="waves-effect waves-light btn-small modal-trigger light-green lighten-1" href="#addActivityModal">A\xF1adir actividad</a>';b(f),a(f),$('.container').prepend(h)}}})},300),$('#editInfoModal').modal({onOpenStart:function(){let f=parent.document.URL.substring(parent.document.URL.indexOf('=')+1,parent.document.URL.length),g=d.events;$('#event_modal_name').val(g[f].name),$('#event_modal_address').val(g[f].address),$('#event_modal_city').val(g[f].city),$('#event_modal_date').val(g[f].date),$('#event_modal_datetime').val(g[f].datetime),$('#event_modal_price').val(g[f].price),$('#event_modal_description').val(g[f].description),M.updateTextFields()},onCloseEnd:function(){}}),$('#editInfoForm').submit(function(f){if(f.preventDefault(),!1===$('#editInfoForm')[0].checkValidity())f.stopPropagation();else{console.log('Submitted properly');let g=parent.document.URL.substring(parent.document.URL.indexOf('=')+1,parent.document.URL.length),h=d.events;h[g].name=$('#event_modal_name').val(),h[g].address=$('#event_modal_address').val(),h[g].city=$('#event_modal_city').val(),h[g].date=$('#event_modal_date').val(),h[g].datetime=$('#event_modal_datetime').val(),h[g].price=$('#event_modal_price').val(),h[g].description=$('#event_modal_description').val(),d.events=h,$.ajax({url:e,type:'PUT',data:JSON.stringify(d),contentType:'application/json; charset=utf-8',dataType:'json',success:function(i,j){('200'===j||'success'===j)&&(M.toast({html:'Evento modificado'}),setTimeout(()=>{window.location.reload()},1e3))},error:function(){M.toast({html:'Hubo un error. Por favor intente nuevamente.'})}})}}),$('#create_event_form').submit(function(f){f.preventDefault(),!1===$('#create_event_form')[0].checkValidity()?f.stopPropagation():(d.events.push(c()),$.ajax({url:e,type:'PUT',data:JSON.stringify(d),contentType:'application/json; charset=utf-8',dataType:'json',success:function(g,h){('200'===h||'success'===h)&&M.toast({html:'Evento creado'})},error:function(){M.toast({html:'Hubo un error. Por favor intente nuevamente.'})}}))}),$('#add_activity_form').submit(function(f){if(f.preventDefault(),!1===$('#add_activity_form')[0].checkValidity())f.stopPropagation();else{let g=parent.document.URL.substring(parent.document.URL.indexOf('=')+1,parent.document.URL.length),h={};h.id=d.events[g].activities.length+1,h.name=$('#activity_name').val(),h.place=$('#activity_address').val(),h.time=$('#activity_time').val(),d.events[g].activities.push(h),$.ajax({url:e,type:'PUT',data:JSON.stringify(d),contentType:'application/json; charset=utf-8',dataType:'json',success:function(i,j){('200'===j||'success'===j)&&(M.toast({html:'Actividad a\xF1adida'}),setTimeout(()=>{window.location.reload()},1e3))},error:function(){M.toast({html:'Hubo un error. Por favor intente nuevamente.'})}})}})});