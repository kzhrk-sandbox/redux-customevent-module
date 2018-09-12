import store from '../store';
import * as actions from '../store/actions';
import { event } from './customEvents';

export default class Tab {
  constructor({
    root,
    el = root.querySelector('.js-tab-el'),
    tabs = el.querySelectorAll('.js-tab'),
    contents = el.querySelectorAll('.js-tab-contents')
  }) {
    this.root = root;
    this.el = el;
    this.tabs = tabs;
    this.contents = contents;

    // store初期化
    store.dispatch(actions.setActiveTab({
      group: this.el.getAttribute('aria-label'),
      tab: this.tabs[0].getAttribute('aria-controls')
    }));

    this.changeActive();
    this.addEvent();
  }

  addEvent() {
    [...this.tabs].forEach(tab => {
      tab.addEventListener(
        'click',
        this.handleClickTab.bind(this),
        false
      );
    });
  }

  handleClickTab(e) {
    const tab = e.currentTarget;

    store.dispatch(actions.setActiveTab({
      group: this.el.getAttribute('aria-label'),
      tab: tab.getAttribute('aria-controls')
    }));

    this.root.dispatchEvent(event.clickTab);
  }

  changeActive() {
    // toggle active class
    [...this.tabs].forEach(tab => {
      tab.getAttribute('aria-controls') === store.getState().activeTab[this.el.getAttribute('aria-label')]
        ? tab.setAttribute('aria-selected', true)
        : tab.setAttribute('aria-selected', false);
    });

    // toggle contents
    [...this.contents].forEach(content => {
      content.id === store.getState().activeTab[this.el.getAttribute('aria-label')]
        ? (content.style.display = 'block')
        : (content.style.display = 'none');
    });
  }
}
