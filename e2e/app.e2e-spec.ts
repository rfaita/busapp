import { BusappPage } from './app.po';

describe('busapp App', function() {
  let page: BusappPage;

  beforeEach(() => {
    page = new BusappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
