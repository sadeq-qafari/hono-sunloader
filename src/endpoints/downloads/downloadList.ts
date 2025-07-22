import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { DownloadModel } from "./base";

export class DownloadList extends D1ListEndpoint<HandleArgs> {
  _meta = {
    model: DownloadModel,
  };

  searchFields = ["url", "status", "metadata"];
  defaultOrderBy = "id DESC";
}
