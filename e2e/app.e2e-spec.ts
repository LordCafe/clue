import { CluePage } from './app.po';

describe('clue App', () => {
  let page: CluePage;

  beforeEach(() => {
    page = new CluePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
