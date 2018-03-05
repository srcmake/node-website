// Home page. 
module.exports.home = function(req, res)
	{
	// Console.log generally is slow. Don't actually use it in production. 
	// Comment it out if you have a real website.
	console.log("Request for the home page called!");

	// Give a 200 status code. 
	res.status = 200;
	
	// Generate a (hard coded for now) HTML page to show the user.
	var response = "<html><body>";
	response += "<h2>You've reached the home page!</h2>";
	response += "</body></html>";
	
	// Send the response back to the user. 
	res.send(response);
	};

// Contact page. 
module.exports.contact = function(req, res)
	{
	console.log("Request for the contact page called!");
	
	res.status = 200;
	
	var response = "<html><body>";
	response += "<h2>You've reached the contact page!</h2>";
	response += "</body></html>";
	
	res.send(response);
	};