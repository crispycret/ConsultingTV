# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).





## Analytics

 The analytic tracking in this project includes:

 * Google Anayaltics 4 (GA4) -> tracking page views, events (contact.click, form.submit, navigate.click, etc), and user engagement.

 * Meta Pixel -> To be implemented.


 Anaylitics can be access using the analytic suite. It provides highly specified pre-built functions for tracking events and also allows for custom events to be created.

#### Examples:
```
 analytics.ga4.track.pageview() -> Inform analytics of a page view
 analytics.ga4.track.event('user.register', value=1) -> Inform anayltics that a user has been registered
 analytics.ga4.events.submit.forms('Contact Us', 'contact' 1)
 analytics.ga4.events.submit.forms.hubspot.contact('Contact Us', success=1)
```



# To Do:

 * Create analytic project and hubsport form for production only, convert current project/form to development resources. Make a development test resource that is used to send specific data and run valudation tests on.

 * Add Analytic support to backend api to allow secondary analytics to confirm primary analytics or if there are erros/discrepencies in tracking.
 * * [Note] Remember that analytics are a great way to measure performce of the server in relation to resources and effiecency and can also be used as security to tracking events and watching for abnormal events such as brute-force attacks on admin panels.

 * Implement complete error handling on the frontend and backend.
 * * Handle Errors such as Hubspot Form Submission that results in `{"status":"error","message":"Unauthorized","correlationId":"....."}` which specifies that the formId does not belong to the oauth-token used for the request. Display this is a way that informs the developers and maintainers that the Hubspot API Environment Variables are configured improperly. 

 * Redesign UI for Immersion
 * Generate Privacy Policy, Terms of Condition.
 * Create LeadQuestionaire (find a name for this) with analytic tracking and backend support.



[testing]