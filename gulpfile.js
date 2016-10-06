const gulp = require('gulp')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const path = require('path')
const webpack = require('webpack-stream')

gulp.task('default', () => {
  return gulp.src('./src/App.js')
  .pipe(webpack({
    entry: './src/App.js',
    output: {
      path: `${__dirname}`,
      filename: 'app.temp.min.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }]
    }
  }))
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('./dist/'))
})

gulp.watch('./src/*.js', ['default'])
