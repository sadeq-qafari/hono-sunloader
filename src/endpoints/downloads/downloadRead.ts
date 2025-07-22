import { D1ReadEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { DownloadModel } from "./base";

export class DownloadRead extends D1ReadEndpoint<HandleArgs> {
  _meta = {
    model: DownloadModel,
  };
}
