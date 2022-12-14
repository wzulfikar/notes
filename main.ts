import { backupComments } from "./lib/backup-comments";
import { backupGist } from './lib/backup-gist';

const gists = {
  "problem-based": "ba2f58d7aeeb3cf53743316f96f91594",
  observations: "2cff9bcd64ba5f15296e0b57ff402f79",
  logs: "5ea5779d7f2ea0e27809e94e7904f93d",
  challenges: "7d5e9426d1c7efc3ceeabb29adb2f4fd",
  electronics: "16c3b5f10b8f28d8b0e325d03c948d1c",
};

(async () => {
  console.log("Fetching gists..")
  const promises: Promise<any>[] = []
  for (const path in gists) {
    promises.push(backupGist({ path, gist_id: gists[path] }))
    promises.push(backupComments({ path, gist_id: gists[path] }))
  }
  await Promise.all(promises)
  console.log("Done!")
  process.exit(0)
})()
