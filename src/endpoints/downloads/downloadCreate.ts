import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { DownloadModel } from "./base";

export class DownloadCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: DownloadModel,
    fields: DownloadModel.schema.pick({
      // this is purposely missing the id, because users shouldn't be able to define it
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
