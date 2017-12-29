const Discord = require("discord.js");
const mybot = new Discord.Client();

mybot.on("ready", function () {
	console.log("Ready to begin! Serving in " + mybot.channels.length + " channels");
});

// MAX 5 LINJER PER COMMAND!
mybot.on("message", function(message) {
	switch (message.content.toLowerCase()) {
		// COMMANDS :
		case "!licens":
			message.channel.send("Husk at betale jeres medielicens! - https://www.dr.dk/licens");
			message.delete();
			break;
		case "!about":
			message.channel.send(":white_small_square: !about for denne besked.");
			message.channel.send(":white_small_square: !licens for at få licensoplysninger.");
			message.channel.send(":white_small_square: !botcode for at få tekniske oplysninger.");
			message.channel.send(":black_small_square: Nævn en af TLGG medlemmerne eller beærede gæster for et kendetegn om dem.");
			message.channel.send(":black_small_square: Idé til botten af Kayseth; Udviklet af Tillerni.");
			break;
		case "!botcode":
			message.channel.send(":black_small_square: Written in Node.js version 8.9.3.");
			message.channel.send(":black_small_square: Using library Discord.js version 11.2.1.");
			message.channel.send(":black_small_square: Bot hosted on Heroku as a free service.");
			message.channel.send(":black_small_square: You will receive no further help to make your own.");
			break;
		// NAVNE :
		case "simon": // Kayseth
			message.channel.send("Hvem vover at nævne skaberens navn?");
			break;
		case "blyfri": // Bearbadger
			message.channel.send("Ham der Blyfri er fandme en rar gut!");
			break;
		case "heavy jackass": // Heavy Jackass
			message.channel.send("RIP Heavy Jackass");
			break;
		case "tillerni": // Tillerni
			message.channel.send("Mener du ham der Trillerni?");
			break;
		case "karis": // Karis
			message.channel.send("Karis er holdets officielle CS:GO regelbog");
			break;
		case "nut": // Fypto
			message.channel.send("Snakker vi om @Nut#0882? Han er sgu god til Rainbow  6.");
			break;
		default:
			console.log("Received unknown chat message.")
	}
});

mybot.setInterval(function() {
  require('dns').resolve('www.google.com', function(err) {
  if (err) {
     console.log("No connection");
  } else {
     console.log("Connected");
  }
});
}, 9750);

mybot.login("")
