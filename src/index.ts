import { Hono } from 'https://deno.land/x/hono@v3.12.0/mod.ts'
import { shutdown } from './shutdown.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))
app.get('/api/v1/shutdown', (c) => {
    shutdown()
    return c.text('ok')
})

Deno.serve(app.fetch)