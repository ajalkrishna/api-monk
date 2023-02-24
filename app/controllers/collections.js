import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CollectionsController extends Controller {
  @tracked jsonData = 'test';

  @action async fetchJsonData(endpoint) {
    let response = await fetch(endpoint);
    let data = await response.json();
    console.log(data);
    this.jsonData = JSON.stringify(data);
  }
}
