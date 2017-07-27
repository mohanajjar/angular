import { TestHelloWorldPage } from './app.po';

describe('test-hello-world App', () => {
  let page: TestHelloWorldPage;

  beforeEach(() => {
    page = new TestHelloWorldPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
