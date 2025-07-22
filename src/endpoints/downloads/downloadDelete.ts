import { D1DeleteEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { DownloadModel } from "./base";

export class DownloadDelete extends D1DeleteEndpoint<HandleArgs> {
  _meta = {
    model: DownloadModel,
  };
}
