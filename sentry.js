import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from '@sentry/profiling-node'
import express from 'express'

const app = express()
Sentry.init({
    dsn: process.env.SENTRY_DSN,
    integrations: [
        new Sentry.Integrations.Http({ tracing: true }),
        new Sentry.Integrations.Express({ app }),
        new ProfilingIntegration(),
    ],
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    profilesSampleRate: 1.0, // Set sampling rate for profiling
})
export default Sentry
