import { FrameworksAppPage } from './app.po';

describe('frameworks-app App', () => {
  let page: FrameworksAppPage;

  beforeEach(() => {
    page = new FrameworksAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
