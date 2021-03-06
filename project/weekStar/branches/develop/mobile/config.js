'use strict';
var config = {
        src: 'src',
        global: {
            components: '',
            lib: ''
        },
        dest: {
            hostname: ['http://web.yystatic.com/project/weekStar/mobile','http://web1.yystatic.com/project/weekStar/mobile','http://web2.yystatic.com/project/weekStar/mobile'],
            revAddr: '',
            path: {
                'root': '',
                'js': 'js',
                'jsLib': 'js/lib',
                'css': 'css',
                'images': 'images',
                'html': 'html',
                'assets': 'assets'
            }
        },
        git: {
            update: [
                // '{$SRC}/components',
                // '{$SRC}/images',
                // '{$SRC}/js',
                // '{$SRC}/psd',
                // '{$SRC}/sass',
                // '{$SRC}/templates'
            ]
        },
        svn: {
            path: {
                commit: '../../commit/mobile',
                trunk: '../../../trunk/mobile'
            },
            update: [
                '{$PATH}',
            ],
            copy: {  //复制元
                'dist': [
                    '{$PATH}'
                ]
            },
            commit: [
                '{$PATH}/css',
                '{$PATH}/js',
                '{$PATH}/html',
                '{$PATH}/images',
                '{$PATH}/assets'
            ]
        }
    };

module.exports = config;
