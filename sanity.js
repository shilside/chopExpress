import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "tedezq59",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-07",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

//RUN THIS to add exception for localhost 3000 and 19000 CORS policy
// sanity cors add http://localhost:3000
// sanity cors add http://localhost:19000

export default client;
