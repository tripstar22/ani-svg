import { AniSvgPage } from './app.po';

describe('ani-svg App', () => {
  let page: AniSvgPage;

  beforeEach(() => {
    page = new AniSvgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('svg works!');
  });
});
