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

export const client = createClient({
  space: "se1putqoco90",
  environment: "master", // defaults to 'master' if not set
  accessToken: "Ebcd5XqVRgvIGN-GyPv2sqBZziW2_UquS5-ishALx0w",
});
