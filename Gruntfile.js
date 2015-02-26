module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-express-server');	
	grunt.loadNpmTasks('grunt-protractor-runner');	
	
	grunt.registerTask('test', ['express:e2e', 'protractor:e2e']);

	grunt.initConfig({
		express: {
			e2e: {
				options: {
					script: 'server.js',
				}
			}
		},
		protractor: {
			e2e: {
				options: {
					configFile: './e2e.conf.js'
				}
			}
		}
	});
};
