import { D1UpdateEndpoint ,} from "chanfana";
import { HandleArgs } from "../../types";
import { DownloadModel } from "./base";

export class DownloadUpdateProgress extends D1UpdateEndpoint<HandleArgs> {
  _meta = {
    model: DownloadModel,
    fields: DownloadModel.schema.pick({
      status: true,
      progress: true,
    }),
  };
}
