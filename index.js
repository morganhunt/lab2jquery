$(document).ready(function(){
	$( "#cityfield" ).keyup(function(){
		var url = "http://ec2-52-25-149-92.us-west-2.compute.amazonaws.com:3000/?q="+$("#cityfield").val();
		$.ajax({url:url,dataType: "json",
		success:function(data){
			console.log("Got "+data);
			console.log("Got "+data[0]);
			console.log("Got "+data[0].city);
		
			var everything;
			everything = "<ul>";
			$.each(data, function(i,item){
				everything += "<li> "+data[i].city;
			});

			everything += "</ul>";
			$("#txtHint").html(everything)
		}})
		.done(function(){console.log('getJSON request succeeded!');})
		.fail(function(jqXHR, textStatus, errorThrown){
			console.log('getJSON request failed! ' + textStatus);
			console.log("incoming "+jqXHR.responseText);
		})
		.always(function(){console.log('getJSON request ended!');})
		.complete(function(){console.log("complete");});
		

		$("#txtHint").text("Keyup "+$("#cityfield").val());
	});
});


$("#cityform").submit(function(e){
	var value = $("#cityfield").val();
	console.log(value);
	e.preventDefault();
	$("#dispcity").text(value);
});