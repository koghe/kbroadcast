
$(function() {
$( "input[type=submit], button" )
.button()
.click(function( event ) {
event.preventDefault();
});
});


$(function() {
$( "#record" ).button({
text: true,
label:"Registra",
icons: {
primary: "ui-icon-bullet red ui-corner-all"
}
}).css("width", "90px","background","red!important", "color","green")
.click(function() {
var options;
if ( $( this ).text() === "Registra" ) {
options = {
label: "Stop Reg",
icons: {
primary: "ui-icon-stop"
}
};

$.ajax({
  type: "GET",
  url: "/control/record/start?app=myapp&name=stream&rec=rec1",
  dataType: "script",
  success: function() {
	$("#str_status").css("background-color","green");    
    //alert("success");
 //   console.log();
  },
  error: function() {
 //   alert("error");
    $("#str_status").css("background-color","red");   
  }
});
} else {
options = {
label: "Registra",
icons: {
primary: "ui-icon-bullet"
}
};

$.ajax({
  type: "GET",
  url: "/control/record/stop?app=myapp&name=stream&rec=rec1",
  dataType: "script",
  success: function() {
	$("#str_status").css("background-color","green");    
    //alert("success");
 //   console.log();
  },
  error: function() {
 //   alert("error");
    $("#str_status").css("background-color","red");   
  }
});
}
$( this ).button( "option", options ).toggleClass("red");
});

// Stream Button
$( "#stream" ).button({
label:"Stream",
text:true //,
// icons: {
// primary: "ui-icon-stop"
// }
})
.click(function() {
$( "#stream" ).button( "option", {
label: "Stream",
text:true //,
// icons: {
// primary: "ui-icon-bullet"
// }
}).addClass("red");
});

$( "#timer" ).button({
text:true,
label: "00:00:00",
icons:{
primary: "ui-icon-clock"
}}).attr("disabled",false).addClass("ui-state-highlight");

$( "#aggiorna" ).button({
text:true,
label: "Aggiorna",
icons:{
primary: "ui-icon-refresh"
}}).click(function(){
$.ajax({
  type: "GET",
  url: "update-rec.php",
  dataType: "html",
  success: function(data) {
	$("#listfile").html(data); //.hide("fold", { horizFirst: false }, 100).show("fold", {}, 100);
	}});
});




 $("#filem").scroll();
 
// $( "select" ).selectmenu();


// $( "#accordion" ).accordion({
//collapsible: true,
// active:false
//}); 

$("#sysm").scroll();
return false;
});

/*
$( "#update" ).button({
text:true,
label: "Aggiorna",
icons:{
primary: "ui-icon-clock"}
}).click(function(){
	alert("yes");
});
*/


$(function(){
var activeTab = null;
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  activeTab = $(e.target).attr('href');
  // console.log("test");
//  console.log($(e.target).attr('href'));
   console.log(activeTab);

if(activeTab == '#Tab3'){
// setInterval(function(){
$.ajax({
  type: "GET",
  url: "update-rec.php?media=rec",
  dataType: "html",
  success: function(data) {
	$("#listfile").html(data);  
 //	alert(resultlist);
  //	console.log(data)
	}});
// },3000);
};

$('#refresh').click(function(){
$.ajax({
  type: "GET",
  url: "update-rec.php?media=rec",
  dataType: "html",
  success: function(data) {
	$("#listfile").html(data);  
	}});
})
})
});






// $.getJSON("http://localhost/on_play", function(data){

 //   $.each(data, function(key, value){
 //       document.write(key+": "+value+"<br />"); 
 //   });
// });

setInterval(function(){
$.ajax({
 type: "GET",
  url: "capture.php",
 dataType: "html",
// contentType: "application/json; charset=utf-8",
//  data: data,
  success: function(data) {
  	if (data === "stopped") {
	$("#str_status").addClass("").css("background-color","green", "color","white!important").val("Start");}
	else
	{  $("#str_status").addClass("").css("background-color","red").val("Stop");  }
	//jwplayer().play();   
    //alert("success");
	console.log(data);
  },
  error: function() {
 //   alert("error");
    $("#str_status").addClass("").css("background-color","red").val("Off"); 
    console.log();  
  }
});
},3000);

$(function(){
$.ajax({
  type: "GET",
  url: "network.php",
  dataType: "json",
  success: function(data) {
	 $.each(data, function(i,item){
	 	$.each(item,function(name, value){
		//	console.log(name + ":"+ value);
			$("#"+ i + name ).val(value);
	//		$("#"+ i ).attr({name: i[0] ).val(item);	 		
	 		})
  });  
	}});
});

	$(document).ready(function() {
			$('form').attr("autocomplete", "off"); 	
		//	$("#test").after("<input type='text' name='test2' value='Test 2' />"); 
		}); 

// $("#demo").collapse()

$(function(){						
$('#dhcp').click(function () {
	console.log("help");
    $('#demo').toggle(this.checked);
    $('#dhcp').html('Manuale');
})});					




