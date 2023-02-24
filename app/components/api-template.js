import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ApiTemplateComponent extends Component {
    @action gotoApi(url){
    window.open(url,'_blank')

    }
}
