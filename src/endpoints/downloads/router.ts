import { Hono } from "hono";
import { fromHono } from "chanfana";
import { DownloadList } from "./downloadList";
import { DownloadCreate } from "./downloadCreate";
import { DownloadUpdate } from "./downloadUpdate";
import { DownloadDelete } from "./downloadDelete";
import { DownloadRead } from "./downloadRead";

export const downloadsRouter = fromHono(new Hono());

downloadsRouter.get("/", DownloadList);
downloadsRouter.post("/", DownloadCreate);
downloadsRouter.get("/:id", DownloadRead);
downloadsRouter.put("/:id", DownloadUpdate);
downloadsRouter.delete("/:id", DownloadDelete);
