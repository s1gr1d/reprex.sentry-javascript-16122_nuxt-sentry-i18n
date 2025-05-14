import * as Sentry from "@sentry/nuxt";
 
Sentry.init({
  dsn: "your-dsn-here",
  
  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
});
