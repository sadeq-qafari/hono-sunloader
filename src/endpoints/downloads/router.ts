import { Hono } from "hono";
import { fromHono } from "chanfana";
import { DownloadList } from "./downloadList";
import { DownloadCreate } from "./downloadCreate";
import { DownloadUpdate } from "./downloadUpdate";
import { DownloadDelete } from "./downloadDelete";
import { DownloadRead } from "./downloadRead";

export const downloadsRouter = fromHono(new Hono());

downloadsRouter.get("/", DownloadList);
// downloadsRouter.post("/", DownloadCreate);
downloadsRouter.get("/:id", DownloadRead);
downloadsRouter.put("/:id", DownloadUpdate);
downloadsRouter.delete("/:id", DownloadDelete);




downloadsRouter.post('/', async (c) => {
  const body = await c.req.json()
  console.log(`body: ${JSON.stringify(body)}`);
  
  if (!body) {
    return c.json({ error: `Invaild input: ${body}` }, 400)
  }

  const { url, metadata = '' } = body

  const now = new Date().toISOString()
  const status = 'queued'

  await c.env.DB.prepare(`
    INSERT INTO downloads (url, status, metadata, create_date)
    VALUES (?, ?, ?, ?)
  `)
    .bind(url, status, metadata, now)
    .run()

  return c.json({ success: true })
})

downloadsRouter.put("/:id/start", async (c) => {
  const id = Number(c.req.param("id"));
  const now = Number(new Date());

  await c.env.DB.prepare(
    `UPDATE downloads SET status = ?, start_date = ? WHERE id = ?`
  ).bind("downloading", now, id).run();

  return c.json({ success: true });
});

downloadsRouter.put("/:id/progress", async (c) => {
  const id = Number(c.req.param("id"));
  const body = await c.req.json();
  const progress = body.progress ?? 0;

  await c.env.DB.prepare(
    `UPDATE downloads SET progress = ? WHERE id = ?`
  ).bind(progress, id).run();

  return c.json({ success: true });
});

downloadsRouter.put("/:id/finish", async (c) => {
  const id = Number(c.req.param("id"));
  const now = new Date().toISOString();

  await c.env.DB.prepare(
    `UPDATE downloads SET status = ?, end_date = ? WHERE id = ?`
  ).bind("done", now, id).run();

  return c.json({ success: true });
});