import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skzYxx2FQ5bIC9WtxtWx8p7e8K0vVob1QyMwS99NKangG5ZFsv5EcaL515xgzhsxuQBfFIp5pb0zfrSEO5YDYqdI4dtOdNNffripPFsEWlDy083ddGYYQblb6etO5Xc5oqcNqAT3ulu8CIaJx3ZiLPXNyqF7CAaXRKlZevBBB3HQBdriRyAD",
})
