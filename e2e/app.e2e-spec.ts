import { Ang2TimezonePage } from './app.po';

describe('ang2-timezone App', () => {
  let page: Ang2TimezonePage;

  beforeEach(() => {
    page = new Ang2TimezonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
