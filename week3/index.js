// Importing os module and util module
const os = require("os");
const util = require("util");

// Displaying the system's temporary directory
console.log("Temporary directory: " + os.tmpdir());

// Displaying the system's hostname
console.log("Hostname: " + os.hostname());

// Displaying the operating system platform and release version
console.log("OS: " + os.platform() + " | Release: " + os.release());

// Displaying the system's uptime in hours
console.log("Uptime: " + (os.uptime() / 3600) + " hours");

// Displaying user information using util.inspect for better formatting
console.log("User Info: " + util.inspect(os.userInfo()));

// Displaying the total system memory in gigabytes
console.log("Total Memory: " + (os.totalmem() / 1000000000) + " GB");

// Displaying the free system memory in gigabytes
console.log("Free Memory: " + (os.freemem() / 1000000000) + " GB");

// Displaying the system's CPUs information using util.inspect for better formatting
console.log("CPU Info: " + util.inspect(os.cpus()));

// Displaying the network interfaces using util.inspect for better formatting
console.log("Network Interfaces: " + util.inspect(os.networkInterfaces()));

// Ending the program
console.log("Program ended.");


