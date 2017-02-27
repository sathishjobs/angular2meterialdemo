import { AngMeterialPage } from './app.po';

describe('ang-meterial App', function() {
  let page: AngMeterialPage;

  beforeEach(() => {
    page = new AngMeterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
