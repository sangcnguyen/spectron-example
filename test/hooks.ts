import { Application } from 'spectron';
import electron from 'electron';

export async function startApp() {
  const app = new Application({
    //@ts-ignore
    path: electron,
    args: ['electron-simple-app']
  });
  return app.start();
}

export async function stopApp(app) {
  if (app && app.isRunning()) {
    await app.stop();
  }
}
