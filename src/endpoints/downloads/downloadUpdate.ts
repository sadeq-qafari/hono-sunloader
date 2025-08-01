import { D1UpdateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { DownloadModel } from "./base";

export class DownloadUpdate extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: DownloadModel,
    fields: DownloadModel.schema.pick({
      url: true,
      status: true,
      progress: true,
      metadata: true,
      create_date: true,
      start_date: true,
      end_date: true,
    }),
  };
}
