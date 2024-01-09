import { Hono } from 'https://deno.land/x/hono@v3.12.0/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))

Deno.serve(app.fetch)