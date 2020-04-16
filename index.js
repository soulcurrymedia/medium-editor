// Project configuration.
// grunt.initConfig({ /* Nothing needed here! */ });

// After running "npm install connect serve-static --save-dev" to add connect as a dev
// dependency of your project, you can require it in your gruntfile with:
var connect = require('connect');
var serveStatic = require('serve-static');
connect(serveStatic(__dirname)).listen(8088);

// // Now you can define a "connect" task that starts a webserver, using the
// // connect lib, with whatever options and configuration you need:
// grunt.registerTask('connect', 'Start a custom static web server.', function() {
//   grunt.log.writeln('Starting static web server in "www-root" on port 9001.');
//   connect(serveStatic(__dirname)).listen(8088);
// });
