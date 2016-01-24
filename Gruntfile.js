module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uiSrc: ['src/**/*.js', '!src/scripts/vendor/**', '!src/services/**','!Gruntfile.js',],
		
		clean: {
			js: ["dist/**"]
		},		
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['<%= uiSrc %>'],
				dest: 'dist/<%= pkg.name %>'
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}				
			}
		},
		
		watch: {
			files: ['<%= jshint.files %>'],
			tasks: ['jshint'],
		},
		
		jshint: {
				files: ['<%= uiSrc %>'],
				  options: {        
					globals: {
						jQuery: true,
						console: true,
						module: true,
						document: true
					}
		}
    }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('default', ['jshint','concat','uglify']);
};