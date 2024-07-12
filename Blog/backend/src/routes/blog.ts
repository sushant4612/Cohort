import { Hono } from "hono";

export const blogRouter = new Hono();

blogRouter.post('/', (c) => {
    return c.text('blog route');
})

blogRouter.put('/', (c) => {
    return c.text('Blog put route');
})

blogRouter.get('/', (c) => {
    return c.text('blog route');
})

blogRouter.get('/bulk', (c) => {
    return c.text('bulk route')
})
