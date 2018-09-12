import { eventName } from './modules/customEvents';
import Tab from './modules/Tab';

window.addEventListener(
  'load',
  () => {
    const root = document.body;
    const tabs = [];

    [...document.querySelectorAll('.js-tab-el')].forEach((el)=>{
      tabs.push( new Tab({root, el}) );
    });

    // tab events
    root.addEventListener(
      eventName.clickTab,
      () => {
        tabs.forEach((tab)=>{
          tab.changeActive();
        });
      },
      false
    );
  },
  false
);
