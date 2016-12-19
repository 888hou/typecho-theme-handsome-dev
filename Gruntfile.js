module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            domop: {
                src: ['js/develope/ui-nav.js','js/develope/ui-toggle.js','js/develope/ui-client.js','js/develope/toastr.min.js'],
                dest: 'js/main.js'
            },
        css: {
            src: ['css/animate.css','css/app.css','css/font.css','css/iconfont.css','css/toastr.min.css'],//当前grunt项目中路径下的src/css目录下的所有css文件
            dest: 'css/appall.css'  //生成到grunt项目路径下的dist文件夹下为all.css
            }     
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/main.js',
                dest: 'js/main.min.js'
            },
            build2:{
                src: 'js/develope/script.js',
                dest: 'js/script.min.js'
            }        
        },

        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            build3: {
                src: 'css/appall.css',
                dest: 'css/appall.min.css',        
            }
        }

    });
 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin'); 

    grunt.registerTask('default', ['concat', 'uglify','cssmin']);
 
};