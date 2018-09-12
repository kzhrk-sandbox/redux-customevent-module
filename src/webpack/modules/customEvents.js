import CustomEvent from 'CustomEvent';

export const eventName = {
  clickTab: 'clickTab',
  clickCar: 'clickCar',
  clickCarsLeft: 'clickCarsLeft',
  clickCarsRight: 'clickCarsRight',
  clickSelectedCar: 'clickSelectedCar',
  clickSeries: 'clickSeries',
  clickSeriesLeft: 'clickSeriesLeft',
  clickSeriesRight: 'clickSeriesRight',
  clickModel: 'clickModel',
  clickModelsLeft: 'clickModelsLeft',
  clickModelsRight: 'clickModelsRight'
};

const clickTab = new CustomEvent(eventName.clickTab, {
  bubbles: true
});

const clickCar = new CustomEvent(eventName.clickCar, {
  bubbles: true
});

const clickCarsLeft = new CustomEvent(eventName.clickCarsLeft, {
  bubbles: true
});

const clickCarsRight = new CustomEvent(eventName.clickCarsRight, {
  bubbles: true
});

const clickSelectedCar = new CustomEvent(eventName.clickSelectedCar, {
  bubbles: true
});

const clickSeries = new CustomEvent(eventName.clickSeries, {
  bubbles: true
});

const clickSeriesLeft = new CustomEvent(eventName.clickSeriesLeft, {
  bubbles: true
});

const clickSeriesRight = new CustomEvent(eventName.clickSeriesRight, {
  bubbles: true
});

const clickModel = new CustomEvent(eventName.clickModel, {
  bubbles: true
});

const clickModelsLeft = new CustomEvent(eventName.clickModelsLeft, {
  bubbles: true
});

const clickModelsRight = new CustomEvent(eventName.clickModelsRight, {
  bubbles: true
});

export const event = {
  clickTab,
  clickCar,
  clickCarsLeft,
  clickCarsRight,
  clickSelectedCar,
  clickSeries,
  clickSeriesLeft,
  clickSeriesRight,
  clickModel,
  clickModelsLeft,
  clickModelsRight
};
