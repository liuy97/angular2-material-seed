import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach( async () => {
    return await browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Welcome to angular material seed!');
  });

});
