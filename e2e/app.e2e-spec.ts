import { Elictiva2Page } from './app.po';

describe('elictiva2 App', function() {
  let page: Elictiva2Page;

  beforeEach(() => {
    page = new Elictiva2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
