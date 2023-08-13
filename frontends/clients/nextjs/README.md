# Starter Next.js Application

This starter next.js application is a remedy towards painful setting up a new next.js application. Here we handle the pain of setting up a standarized project strucutre and handle the configurations of important tools for any next.js project such as storybook.

Installing storybook into a new next.js project creates all sorts of problems now that next.js uses the rust based compilier SWC instead of babel, which is used by storybook and many other tools. To remedy this we needed to include changes to the `next.config.js` file as well as some other changes (don't know if they were necessary) that has proved to be a working fix so far.

Other features include global interegration to the React library, and my custom npm toolset that include common hooks and utilities not covered by the default `react` and `next` libraries. Examples of these hooks include mobile detection, countdown timers, scrolling detection and triggers, etc, that can be found in the `@crispy/tools` library (named eternite for now).




### [Notes] SEO - Testing

Testing your SEO performance while still in development is essential to ensure that your website is properly optimized for search engines before it goes live. Here are a few ways you can test your SEO performance during the development phase:

1. **Google Search Console (GSC) - URL Inspection Tool:**
   Google Search Console is a powerful tool that provides insights into how Google indexes your site. You can use the URL Inspection Tool to check how Google sees your pages, whether they are indexed, and if there are any issues. This can help you understand how your pages will appear in search results.

2. **Structured Data Testing Tool:**
   Google's Structured Data Testing Tool allows you to test your JSON-LD and other structured data markup. You can paste your JSON-LD code into the tool to see how Google understands and interprets your structured data. This is crucial for ensuring that your rich snippets and schema markup are correct.

3. **Lighthouse in Chrome DevTools:**
   Lighthouse is an auditing tool available in Chrome DevTools that can help you assess various aspects of your website's performance, including SEO. It provides a "SEO" audit that checks for best practices like having meta titles, descriptions, and other important SEO elements. This is a great tool to catch any basic SEO issues.

4. **SEO Browser Extensions:**
   There are several browser extensions available that provide real-time SEO analysis for the page you're currently viewing. These extensions can help you see the meta data, headings, and other on-page SEO elements as they will appear in search results. Examples include MozBar and SEOquake.

5. **Fetch as Google:**
   In Google Search Console, there's a "Fetch as Google" feature that allows you to simulate how Google's crawler sees your page. This can help you ensure that your pages are rendering correctly for search engines.

6. **Third-Party SEO Tools:**
   There are various third-party SEO tools available that offer free trials or limited features for testing. Some examples include Screaming Frog, SEMrush, and Ahrefs. These tools can provide detailed analysis and recommendations for improving your site's SEO.

7. **Mobile-Friendly Test:**
   Google's Mobile-Friendly Test tool helps you ensure that your website is responsive and mobile-friendly. Mobile-friendliness is an important factor in SEO, and this tool can give you insights into how your site performs on different devices.

8. **Shareability and Rich Snippet Preview:**
   When sharing links on social media, the way your content is displayed can impact click-through rates. Use tools like the Facebook Sharing Debugger and Twitter Card Validator to see how your links will appear when shared.

Remember that SEO is an ongoing process, and it's important to keep testing and optimizing even after your website goes live. These testing methods can help you catch and address any SEO-related issues before your website is launched.





### [Notes] - Whats Next?

Here are some next steps to consider to deepen your understanding and skills:

1. **Advanced Concepts**: Once you've mastered the basics, you can dive into more advanced concepts of Next.js, such as data fetching with SWR, working with API routes, serverless functions, and dynamic routing.

2. **Styling and UI Libraries**: Explore different approaches to styling in Next.js, including using CSS modules, CSS-in-JS libraries like styled-components or emotion, and integrating popular UI libraries like Material-UI, Ant Design, or Chakra UI.

3. **Authentication and Authorization**: Learn how to implement user authentication and authorization in your Next.js applications using libraries like NextAuth.js or Auth0.

4. **State Management**: Understand how to manage global state in your Next.js applications using tools like React Context, Redux, Recoil, or Zustand.

5. **Testing**: Explore testing methodologies for Next.js applications, including unit testing, integration testing, and end-to-end testing using libraries like Jest, Testing Library, and Cypress.

6. **Optimization and Performance**: Learn about optimizing your Next.js application for performance, including techniques like code splitting, lazy loading, image optimization, and caching.

7. **Deployment and Hosting**: Explore different deployment options for Next.js applications, including deploying to platforms like Vercel, Netlify, or AWS Amplify.

8. **Real-World Projects**: Work on real-world projects to apply your knowledge and skills. Build a personal portfolio, a blog, an e-commerce site, or any other project that interests you.

9. **Documentation and Official Resources**: Refer to the official Next.js documentation and resources, including the Next.js GitHub repository, documentation, and examples.

10. **Community and Online Courses**: Join the Next.js community, participate in forums, attend meetups, and consider enrolling in online courses or tutorials that cover more advanced topics.

Keep building and experimenting with different aspects of Next.js.





# Default Next.js README.md
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
