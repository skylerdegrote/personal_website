module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers:{
                src:"client/scripts/controllers/controller.js",
                dest:"server/public/assets/scripts/controllers/controller.min.js"
            }

        },
        copy: {
            styles: {
                expand: true,
                cwd: "client",
                src:
                    "styles/styles.css",

                dest: "server/public/assets/"
            },
            html: {
                expand:true,
                cwd:"client",
                src:"views/index.html",
                dest: "server/public/assets/"
            },
            htmlRoutes: {
                expand:true,
                cwd:"client",
                src:[
                    "views/routes/home.html",
                    "views/routes/about.html",
                    "views/routes/projects.html"
                ],
                dest: "server/public/assets/"
            },
            angular: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"
                ],
                dest: "server/public/vendors/"
            },
            angularMaterial: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "angular-animate/angular-animate.min.js",
                    "angular-aria/angular-aria.min.js",
                    "angular-material/angular-material.min.js"
                ],
                dest: "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                dest: "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: "node_modules",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                dest: "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['copy', 'uglify']);
};