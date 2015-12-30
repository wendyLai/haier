define('borrowers/router', ['exports', 'ember', 'borrowers/config/environment'], function (exports, _ember, _borrowersConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _borrowersConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('funcs', function () {
      this.route('func', { path: ':func_slug' }, function () {
        this.route('kindall', { path: ':row_slug/:kind_slug' });

        this.route('kind1');
        this.route('kind2');
        this.route('kind3');
        this.route('kind4');
        this.route('kind5');
        this.route('kind6');
        this.route('kind7');
        this.route('kind8');
        this.route('kind9');
        this.route('kind10');
        this.route('kind11');
        this.route('kind12');
        this.route('kind13');
        this.route('kind14');
        this.route('kind15');
        this.route('kind16');
        this.route('kind17');
        this.route('kind18');
      });
    });
  });

  exports['default'] = Router;
});