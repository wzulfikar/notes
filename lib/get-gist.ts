import { Octokit } from "octokit";

export const getGist = async ({ gist_id }) => {
  const octokit = new Octokit();

  const gist = await octokit.request("GET /gists/{gist_id}", {
    gist_id,
  });
  return gist.data
};
