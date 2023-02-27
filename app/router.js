import EmberRouter from '@ember/routing/router';
import config from 'ember-one/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('collections');
  this.route('contribute');
});
