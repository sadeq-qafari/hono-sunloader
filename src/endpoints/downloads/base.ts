import { z } from "zod";

export const download = z.object({
  id: z.number().int(),
  url: z.string(),
  status: z.string(),
  progress: z.number(),
  metadata: z.string(),
  create_date: z.string().datetime(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
});

export const DownloadModel = {
  tableName: "downloads",
  primaryKeys: ["id"],
  schema: download,
  serializer: (obj: Record<string, string | number | boolean>) => {
    return {
      ...obj,
      completed: Boolean(obj.completed),
    };
  },
  serializerObject: download,
};
