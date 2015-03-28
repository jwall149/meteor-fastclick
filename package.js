Package.describe({
  name: "jwall149:fastclick",
  summary: "Fastclick 1.0.6, Faster touch events on mobile",
  version: "1.0.1",
  git: "https://github.com/jwall149/meteor-fastclick"
});

Package.onUse(function (api) {
  api.export('FastClick', 'web');

  api.addFiles(['pre.js', 'fastclick.min.js', 'post.js'], 'web');
});