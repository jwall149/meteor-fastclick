FastClick = module.exports.FastClick;

Meteor.startup(function () {
  FastClick.attach(document.body);
});