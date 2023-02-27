import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApiTemplateComponent extends Component {
  @tracked copiedUrl = '';

  @action gotoApi(url) {
    window.open(url, '_blank');
  }
  @action copyToClipboard(url) {
    this.copiedUrl = url;
    navigator.clipboard.writeText(url);
  }
}
