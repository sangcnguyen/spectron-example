import { startApp, stopApp } from './hooks';
import { assert } from 'chai';
import { Application } from 'spectron';

describe('First launch', () => {
  let app: Application;

  beforeEach(async () => {
    app = await startApp();
  });

  afterEach(async () => {
    await stopApp(app);
  });

  it('should open a window', async () => {
    assert.equal(await app.client.getWindowCount(), 1);
  });

  it('should have a content', async () => {
    const helloElement = await (await app.client.$('h1')).getText();
    assert.equal(await (await app.client.$('h1')).getText(), 'Hello World!');
  });
});
