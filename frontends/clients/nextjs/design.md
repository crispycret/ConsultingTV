Find a way to standarize a JSON  strucutre that includes the home page content, json-ld, and meta-tags in a single json file

Acheiving this will lead to a way to dyanmically create a web page (with components, data, events, actions, and seo) through a dashboard application


For Now though, we will create a page using content.json, json-ld.json, and meta-tags.json files to add content and seo infromation while a page / component events / actions and styling  will be static.

After a dynamic rendering through a dashboard is complete move on to full project generation, building and hosting.

The project generation should allow a user to download the project as a zip file. It should include all source materials and allow them to make modifications to the code (This may break automatic building and hosting)


template.json -> template used to generate a page. Structures components (allows for custom component + custom styling)
api-integration.json -> template used to add API integration.
content.json -> contains content to apply to the template.
events.json -> events tied to actions + states that connect template and content json files. May include api-integration instructions as well.
seo.json -> contains json-ld sctuctured data and meta tags.