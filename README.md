# Consulting TV

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
                                                                   













