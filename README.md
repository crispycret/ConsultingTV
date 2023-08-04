# [Consulting TV](https://www.cordcuthelp.com)
 Consulting TV aims to provide a solution to customers who are not tech savvy but want to jump off the sinking ship that is cable.


## Problem to Solve:

 Over the years, the landscape of media entertainment has transformed leaving those who have not adapted paying outragious bills, even though customers no longer have access to the shows they want as different streaming services have purchased the licensing rights to many shows.


## Basic Idea:
 
 Allow a customer to fill-out a questionaire to determine what complications customers are having with their current media and explore what the customer wants to achieve in a media solution. Finally tailor a media package for the customer to best fulfill the customers requirements. Hopefully this leads to a reduction in their overall media bill. A percentage of those monthly savings would be the revenue source for the company.



## Global Requirements:

 * SEO Performance is a high priority and needs to be a major focus of systems architecture design (Solution: Dynamic SSR for crawlers & indexers).
 * Form Filling Frontend for User Data Acquisition (ReactJS).
 * Form Forwarding to a CRM tool.



## Alpha Testing Goal Overview:
 
 The alpha solution to the goal is a very short term working prototype built entirely into a single frontend application using ReactJS.

[FlowControl]
 * Landing Page -> User Data Form (Contact / Questionarie) -> Data Processing -> CRM API

 This solution fails to meet SEO requirements and has security issues in regards to linking user filled form data directly to the CRM API. To increase SEO results and eliminate the security issues.

  * Use Server-Side-Rendering (SSR) to increase SEO performance
  * Use a Logic Controller on the backend to handle CRM API request to increase security.




## Overall Short-Term Goal Overview:
```
                                                                  ________
                    Load Site Settings / Static Content          |        |                                 
                  ___________________________________________/>  | Client |                                              
                 /                                               |________|         
   __________   /                                           
  |          | /                                                                 
  | Server 0 |                                                                   
  |__________| \                                                 ___________
                \  Submit Changes to Site Settings / Content    |           |                               
                 \___________________________________________/> | Dashboard |                                                
                                                                |___________|   
                                                                   
```                                                        



## Checkout

### [Rough Draft Sketches](https://github.com/crispycret/ConsultingTV/tree/main/docs/sketch/rough-draft)



# Production/Development Tips:

* While developing or making changes always use the `dev` branch.
* Only merge `dev` into `main` when there is a working version that has been tested.

### Deployment

* Before overriding the hosted production applications with the working/test `main` branch, test for a successful deployment to a `development/testing` site.
* Once it is known that the deployment works, either point the domain names DNS namespace to the new DNS targets and configure all applications 
* * or 
* Risk updating the current production application. The former allows you to rollback to the previous working deployment quickly.

#### How to Deploy:

 Since we are working with what could be considered a monorepo, we need to split the applications we want to deploy using `git subtree`.
 If this is the first time we are deploying the branch after changes were made, split the applications into temporary branches and then push to a test production site.

 In the repos root directory do the following:
 
 Split the applications into test branches
 ```
 git subtree split -P <prefix>  -b <name-of-new-branch>

 git subtree split --prefix /path/to/app1 -b backend-flask-api-test
 git subtree split --prefix /path/to/app2 -b frontend-react-client-test 
 ```

 Create and Configure new production environments (Heroku) and add a remote location to the test branch for deployment. 

 ```
 heroku git:clone -a consulting-tv-flask-api-test
 git remote --rename heroku heroku-backend-flask-api-test

 heroku git:clone -a consulting-tv-react-client-test
 git remote --rename heroku heroku-frontend-react-client-test
 
 ```

 Then push the repos to the production enviornment

 ```
 git push -u <test-remote> <test-branch>:<remote-branch>

 git push -u heroku-backend-flask-api-test backend-flask-api-test:main
 git push -u heroku-frontend-react-client-test frontend-react-client-test:main
 ```

Now test the deployment to make sure everything is working properly.

When all testing is complete it is time to deploy for real. Push the working test branches to old application branches then push to live production environment.

checkout dev -> make changes -> push -> merge main -> split application -> test deploy -> merge test and working applications -> deploy to live production -> clean up -> repeat

Follow the below steps for each application.
```
git checkout backend-flask-api-test
git push -u origin backend-flask-api-test:backend-flask-api
git checkout backend-flask-api
git merge origin backendflask-api-test
git push -u heroku-backend-flask-api backend-flask-api:main
git branch -D backend-flask-api-test
git remote delete heroku-backend-flask-api-test
```

Finally, destroy the test deployed applications.












