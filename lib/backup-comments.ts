import fs from "fs"
import { listComments } from "./list-comments";

export async function backupComments({ path, gist_id }) {
  const comments = await listComments({ gist_id })
  comments.forEach(({ id, body }) => {
    fs.writeFileSync(`./gists/${path}/${id}.md`, body)
  })
}
