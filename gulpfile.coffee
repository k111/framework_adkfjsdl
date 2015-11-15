###
プラグイン読み込み
###
gulp = require 'gulp'
$ = require('gulp-load-plugins')(
    pattern: [
        'gulp-*'
        'gulp.*'
    ]
    replaceString: /\bgulp[\-.]/
)

browserSync = require 'browser-sync'
pngquant = require 'imagemin-pngquant'

# 各種設定
path =
    src: './src'
    dest: './htdocs'


###======================================
サーバー起動タスク
###
gulp.task 'server', ->
    browserSync.init
        server:
            baseDir: path.dest

gulp.task 'reload', ->
    browserSync.reload()


###======================================
sassコンパイルタスク
###
gulp.task 'sass', ->
    gulp.src path.src + '/sass/**/*.scss'
        .pipe $.plumber errorHandler: $.notify.onError '<%= error.message %>'
        .pipe $.sourcemaps.init()
        .pipe $.sass
            outputStyle: 'expanded'
            sourcemap: true
        .pipe $.pleeease
            autoprefixer: [
                'last 2 version'
                'ie 8'
                'ie 9'
            ]
            minifier: false
            presudoElements: false
            rem: false
            opacity: true
            mqpacker: false
        .pipe $.csscomb config: './.csscomb.json'
        .pipe $.sourcemaps.write()
        .pipe gulp.dest path.dest + '/css'
        .pipe browserSync.stream()


###======================================
css Lintタスク
###
gulp.task 'csslint', ->
    gulp.src path.src + '/css/**/*.css'
        .pipe $.plumber errorHandler: $.notify.onError '<%= error.message %>'
        .pipe $.csslint()
        .pipe $.csslint.reporter()


###======================================
sprite画像生成タスク
###
gulp.task 'sprite', ->
    spriteData = gulp.src path.src + '/img_sprite/*.png'
    .pipe $.spritesmith(
        imgName: 'sprite.png'
        cssName: '_spritesmith.scss'
        imgPath: '../img/sprite/sprite.png'
        #retinaImgName: 'sprite_2x.png'
        #retinaSrcFilter: path.src + '/img_sprite/*_2x.png'
        padding: 10
        cssFormat: 'scss'
        cssSpritesheetName: 'sprite-img'
        cssVarMap: (sprite) ->
            sprite.name = 'ico-' + sprite.name
            #VarMap(生成されるScssにいろいろな変数の一覧を生成)
            return
        algorithm: 'diagonal' # 'top-down'
        algorithmOpts: sort: false
        cssTemplate: 'src/img_sprite/spritesmith_template.txt'
    )

    #imgNameで指定したスプライト画像の圧縮
    spriteData.img
    #     .pipe $.imagemin(
    #         progressive: true
    #         svgoPlugins: [
    #             removeViewBox: false
    #         ]
    #         use: [
    #             pngquant
    #             quality: 60 - 80
    #             speed: 1
    #         ]
    #     )
        .pipe gulp.dest path.dest + '/img/sprite/'

    # cssNameで指定したcssの保存先
    spriteData.css
        .pipe gulp.dest path.src + '/sass/module/'
    return


###======================================
スタイルガイド(styledown) 生成タスク
###
gulp.task 'styleguide', ->
    gulp.src [
        path.src + '/styleguide/*.md'
        '!' + path.src + '/styleguide/config.md'
    ]
    .pipe $.styledown
        config: path.src + '/styleguide/config.md'
        filename: 'index.html'
    .pipe gulp.dest path.dest + '/_styleguide/';


###======================================
CSS 圧縮タスク
###
gulp.task 'cssmin', ->
    gulp.src path.dest + '/css/**/*.css'
        .pipe $.minifyCss()
        .pipe $.rename suffix: '.min'
        .pipe gulp.dest path.dest + '/css/'


###======================================
画像圧縮タスク
画像が追加・変更されたときに圧縮する
###
gulp.task 'imagemin', ->
    gulp.src path.src + '/img/**/*'
    .pipe $.imagemin
        progressive: true
        svgoPlugins:
            removeViewBox: false
        use: [
            pngquant
                quality: 60 - 80
                speed: 1
        ]
    .pipe gulp.dest path.dest + '/img'



###======================================
HTML Lintタスク
HTMLが変更されたときにLintを通す
###
gulp.task 'html', ->
    gulp.src [
        path.dest + '/**/*.html'
        '!' + path.dest + '/_styleguide/**/*'
    ]
    .pipe $.plumber errorHandler: $.notify.onError '<%= error.message %>'
    .pipe $.htmlhint './.htmlhintrc'
    .pipe $.htmlhint.reporter()
    .pipe $.htmlhint.failReporter()
    .pipe browserSync.stream()


###======================================
JSタスク
###


# IE8ディレクトリJSファイル結合
gulp.task "iejs", ->
    gulp.src path.src + '/js/ie8/*.js'
    .pipe $.concat 'ie8.js'
    .pipe gulp.dest path.dest + '/js'

# libsディレクトリJSファイル結合
gulp.task "libsjs", ->
    gulp.src path.src + '/js/libs/*.js'
    .pipe $.concat 'libs.js'
    .pipe gulp.dest path.dest + '/js'

# webpack
gulp.task 'webpack', ->
    gulp.src path.src + '/js/index.js'
    .pipe $.webpack()
#   .pipe(gulpif(config.js.uglify, uglify()))
    .pipe $.rename 'app.js'
    .pipe gulp.dest path.dest + '/js/';


###======================================
defaultタスク
###
gulp.task 'default', [ 'server' ], ->
    gulp.watch path.src + '/sass/**/*.scss', [ 'sass' ]
    gulp.watch path.src + '/styleguide/*.md', [ 'styleguide' ]
    gulp.watch path.src + '/img/**/*', [ 'imagemin' ]
    gulp.watch path.src + '/js/ie8/*.js', [ 'iejs' ]
    gulp.watch path.src + '/js/libs/*.js', [ 'libsjs' ]
    gulp.watch path.src + '/js/**/*.js', [ 'webpack' ]
    gulp.watch path.dest + '/**/*.html', [ 'reload' ]
    #gulp.watch(path.dest + '/**/*.html',['html']);  return

