import '@angular/platform-server/init';
import '@angular/compiler';
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import express, { Request, Response, NextFunction } from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularAppEngine = new AngularAppEngine();

/**
 * Serve static files from /browser
 */
app.get(
  '*.*',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('*', (req: Request, res: Response, next: NextFunction) => {
  angularAppEngine
    .handle(req as any)
    .then((response) => {
      if (response) {
        response.body?.pipeTo(new WritableStream({
          write(chunk) {
            res.write(chunk);
          },
          close() {
            res.end();
          }
        }));
      } else {
        next();
      }
    })
    .catch(next);
});

/**
 * The request handler used by the Angular CLI.
 */
export const reqHandler = createRequestHandler(app as any);
