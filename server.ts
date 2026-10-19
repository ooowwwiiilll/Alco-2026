import express from 'express';
import path from 'node:path';

const app = express();
const port = Number(process.env.PORT ?? 3000);
app.disable('x-powered-by');
app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
app.use('/api', (_request, response) =>
  response.status(410).json({ error: 'Legacy file API retired. Use the configured repository.' }),
);

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer } = await import('vite');
    const vite = await createServer({ server: { middlewareMode: true }, appType: 'spa' });
    app.use(vite.middlewares);
  } else {
    const dist = path.resolve('dist');
    app.use(express.static(dist));
    app.get('*', (_request, response) => response.sendFile(path.join(dist, 'index.html')));
  }
  app.listen(port, process.env.HOST ?? '127.0.0.1', () =>
    console.log(`ALCO: http://localhost:${port}`),
  );
}
startServer().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
