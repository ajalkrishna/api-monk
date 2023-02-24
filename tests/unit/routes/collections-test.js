import { module, test } from 'qunit';
import { setupTest } from 'ember-one/tests/helpers';

module('Unit | Route | collections', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:collections');
    assert.ok(route);
  });
});
