import { AngupartPage } from './app.po';

describe('angupart App', () => {
  let page: AngupartPage;

  beforeEach(() => {
    page = new AngupartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
