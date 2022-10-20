import { Octokit } from "octokit";

export const listComments = async ({ gist_id, per_page = 20 }) => {
  const octokit = new Octokit();

  const gistComments = await octokit.request("GET /gists/{gist_id}/comments", {
    gist_id,
    per_page,
  });
  return gistComments.data
};
