import { createClient } from "contentful";
/**
   //& access the client details below from contentful account in the database
    1. click on settings
    2. click on API keys
    3. click on Add API key
    4. click on Create API Key
    5. Copy the code from Space ID and paste it next to space below
    6. Copy the code from Content Delivery API - access token and paste it next to accessToken below
   */

export const clientProducts = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

export const clientAbout = createClient({
  space: import.meta.env.VITE_ABOUT_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ABOUT_ACCESS_TOKEN,
});
