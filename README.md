#Kevin Bielawski's page

###TODO
* Use webpack for client *and* server
* React server rendering
* Flux-type architecture to manage state

###Known bugs
* /api/latest and Latest.jsx

###Packages used
* `express` for routing and api
* `gulp` and requisite `webpack` and `sass` modules for build process

###Development and production differences
* In development, local assets are served using `express` middleware
* In production, assets are served using cloudfront (example below)

```javascript
//  aws
gulp.task('aws', function() {
  var awsConfig = JSON.parse(fs.readFileSync('./config/aws.json'));
  var oldFile = fs.readFileSync('static/index.html', {encoding: 'utf8'});
  var newFile = utils.replaceAll('../build/', 'http://XXXXXXXXXXX.cloudfront.net/', oldFile);
  fs.writeFileSync('static/build/index.html', newFile);

  return gulp.src('static/build/**')
    .pipe(s3(awsConfig));
});
```
