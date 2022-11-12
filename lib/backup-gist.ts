import fs from "fs"
import { getGist } from './get-gist';

export async function backupGist({ path, gist_id }) {
  const { files } = await getGist({ gist_id })
  for (const filename in files) {
    fs.writeFileSync(`./gists/${path}/README.md`, files[filename]?.content!)
  }
}
