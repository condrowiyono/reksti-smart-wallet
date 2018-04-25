let mix = require('laravel-mix');

mix.autoload({});

mix
  .js("resources/assets/js/app.js", "public/js")
  .extract(['lodash', 'popper.js','jquery', 'bootstrap', 'selectize', 'alertifyjs'])
  .js("resources/assets/js/admin.js", "public/js")

  .sass("resources/assets/sass/app.scss", "public/css")
  .sass("resources/assets/sass/admin.scss", "public/css")
  .options({
    processCssUrls: true
  });

mix.browserSync({
  proxy: "smart-wallet.test"
});

if (mix.config.inProduction) {
  mix.version();
}
