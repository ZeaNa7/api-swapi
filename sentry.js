import * as Sentry from "@sentry/node";
import { ProfilingIntegration } from "@sentry/profiling-node";
import express from 'express';

export default function sentry() {
    const app = express();
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
        new ProfilingIntegration(),
      ],
      tracesSampleRate: 1.0, //  Capture 100% of the transactions
      profilesSampleRate: 1.0,// Set sampling rate for profiling
    });
    
    // The request handler must be the first middleware on the app
    app.use(Sentry.Handlers.requestHandler());
    
    // TracingHandler creates a trace for every incoming request
    app.use(Sentry.Handlers.tracingHandler());
    
    // The error handler must be registered before any other error middleware and after all controllers
    app.use(Sentry.Handlers.errorHandler());

}