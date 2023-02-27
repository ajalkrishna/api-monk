import { module, test } from 'qunit';
import { setupTest } from 'ember-one/tests/helpers';

module('Unit | Route | contribute', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:contribute');
    assert.ok(route);
  });
});
