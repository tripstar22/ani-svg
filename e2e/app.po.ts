import { browser, by, element } from 'protractor';

export class AniSvgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('svg-root h1')).getText();
  }
}
