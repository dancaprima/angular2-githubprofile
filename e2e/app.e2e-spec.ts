import { Angular2ExercisePage } from './app.po';

describe('angular2-exercise App', function() {
  let page: Angular2ExercisePage;

  beforeEach(() => {
    page = new Angular2ExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
