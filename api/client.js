import sanityClient from "@sanity/client";
import dotenv from 'dotenv';

dotenv.config();

export default sanityClient({
    projectId: "enter yours here",
    dataset: "production",
    useCdn: false,
    apiVersion: "2022-05-27",
    token: process.env.SANITY_API_TOKEN,
});
