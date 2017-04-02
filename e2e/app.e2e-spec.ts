import { TestTangoPage } from './app.po';

describe('test-tango App', () => {
  let page: TestTangoPage;

  beforeEach(() => {
    page = new TestTangoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
