/* Deploy plugins */
const gulp = require('gulp');
const ftp = require('vinyl-ftp');
const log = require('fancy-log');

/* Deploy task */
gulp.task('deploy', () => {
  const conn = ftp.create({
    host: 'themes00.ftp.tools',
    user: 'themes00_denys',
    password: '30gKTD9vl9',
    parallel: 10,
    log: log
  });
  const globs = [
    'build/**',
  ];
  return gulp.src(globs, { buffer: false })
    .pipe(conn.dest('/themescode.com.ua/www/creativemarket/packs/'));
});
/* Deploy task */