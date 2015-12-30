define('borrowers/router', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _borrowersConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('funcs', function () {
      this.route('func', { path: ':func_slug' }, function () {
        this.route('kind4');
        this.route('kind5');
        this.route('kind6');
        this.route('kindall', { path: ':kind_slug' });

        this.route('row', { path: ':row_slug' }, function () {
          this.route('kind', { path: ':kind_slug' });
        });
      });
    });
  });

  exports['default'] = Router;
});