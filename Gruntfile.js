module.exports = function (grunt) {
	
	/*
	grunt.registerTask('speak',	function () {
			console.log("I am speaking");		
	});
	*/

	grunt.initConfig({
		watch: {
			js: {
				files : ['js/**/*.js']
			},
		},
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
}