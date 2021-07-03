---
title: Do your next side project just like a complete production grade project
date: "2021-06-21T22:20:32.169Z"
description: What are some steps we can take to ensure that a side project is as close to a 'real', production ready project
tags: ["tech"]
---

A lot of us often complained, especially during our college years, the wide discrepancy between how we did side projects in college, vs how they work in the industry, and I am not referring just to the scale and complexity of the industry project.

Even if a project of the same level was done personally by us, vs it being done in a formal software industry setting, the process would be entirely different - the latter would involve requirements analysis, PRD making, design creating, feature branches, code reviews, automated tests, linting and more.

And this means that even if we do projects on the side, it doesn't give us enough confidence of us being able to do justice to our roles immediately in a software industry setting.

But tell you the truth - it doesn't have to be so. To quite an extent, we can tweak our side project structure to emulate as much of a 'real' software project as to give us a pretty fair idea of what we're up against when we enter the industry.

Here are a few points you should look at/implement when doing a side project : 

1. Requirement analysis/Software Requirements Specification/Product Requirements Document : This is one thing we often ignore or take for granted, simply because we start our project with an idea or a set of features in mind, and we usually try to keep em verbal and limited to those. More often, we often follow tutorials that walk us through the project's code step by step, and we emulate the same thing. These factors mean that we don't spend enough time doing a requirement analysis to analyze the feasibility and priority of each feature, create user stories and so on.

    This means that we are only looking at a project from a constrained point of view - and this isn't the case in most software projects. In the industry, we're given a bird's eye view of the project, its expected functionalities and user base, and it's we who have to formalize and structure it into requirements. This allows us to think of the business/user side of things, teach us to prioritize important features so that we're spending less effort on unimportant features, and have a clear set of iterative goals in mind.

    Creating a PRD or an SRS is subjective - product managers spend days making a PRD in an industry setting, but you need not do the same. Just understanding the contents of a typical SRS and PRD should give you enough knowledge to create a simple one for your next project within an hour.

    The important part is to stick to it.

2. Sprint planning : We often binge our projects - we go into frenzy mode and do em all working 10-12 hours a day for 3-4 days, then give them up for a week, and repeat the cycle. Moreover, what we do in each cycle is also dependent on our moods, what the tutorial guy is teaching and so on. A more scalable idea would be to plan things beforehand in terms of sprints. A sprint is a period of software engineering with a definitive goal and clearly defined expected outcomes. It can range anything from a couple of days to multiple weeks, based on complexity.

The advantage of this, is that after each sprint, you have a significant chunk of the project ready, matching the requirements that you set at the beginning of the sprint, as well as regularly make tweaks to your priorities and deadlines based on each sprint's review.

Again, this isn't as hard as it seems. You have the final SRS/PRD of the project - you need to break it down to ACHIEVABLE chunks, with deadlines for each set of features. 

This can and I recommend, should go into a project management tool - preferably JIRA(the most commonly used in the industry), Trello, Notion or such like. No, 'verbally speaking and remembering' sprint features doesn't work. Writing it down on paper might sound appealing and might be a preferred way for many of us, but it doesn't work that way in the industry.

3. Design (Frontend AND Backend)

In most of our side projects, especially those we follow tutorials for, we immediately start writing teh code - if it's a backend thing, we start making the DB queries and Schema. If it's frontend, we directly start writing React. This, however, doesn't work in the industry, because first, unlike in side projects, you don't have tutorials you can blatantly emulate, and second, there's a lot of open questions that you need to take a call on - the design system of the project, the theme, the schema design, the flow of the website, and a zillion others. A design is created first, then that design is iterated and improved upon, and the design is then implemented in code.

Frontend design, creating UI mockups of the end product is usually done using tools like Figma or Sketch, but you need not do this if you don't want to spend a lot of time learning these. Instead, you can use an tools like [Whimsical](https://whimsical.com) or [Diagrams.net](http://diagrams.net) to create a similar but vastly less complex version of the design - something like a Wireframe, so that you know what components go where, the style guides(color palette, typography, transitions etc) and so on. Note that the design is not set in stone, not even in the software industry, it is iterated upon by the designers, the product managers and the developers based on UX, priorities and complexity of implementation, so do not worry if you think you're gonna tweak your design later on - just make sure that changes go from design to code, not vice versa.

In case of a backend/full stack application, you need to create a rough architecture of what are the different entities involved - the DB, the backend server, and so on so that it forms a coherent pathway for data to flow. This architecture can be as simple as a bunch of boxes for simple projects like Todo applications, but increase in complexity when things like Microservices, messaging queues are involved. Another important aspect you should think of beforehand, is schema design - you should not change your database schema whenever you feel like it - in a production environment, it'll cause disaster if you remove one small field and it breaks the app for a zillion users. Schema design is carefully analyzed and planned based on the required fields, while ensuring ACID compliance(in case of SQL DBs), and creating a pathway for schema changes to be made without affecting existing users.

4. Project structure

As beginners, a lot of us often tend to not be aware, or care a lot, about file structure in projects. Even the tutorials we follow usually do not enforce this. We might have one single file making API calls, creating the UI across multiple tables and so on. This is extremely unscalable - the second you have to add an extra feature, you will get overwhelmed because different code snips, stuck in the same file will confuse you.

Separation of concerns and modularity are extremely critical when doing a software project, especially if we want it to scale seamlessly. For instance, consider a React project - you could have easily dumped your entire code into the single App.js file. But we don't/shouldn't do that. Instead, a separate folder for each component - each folder contains an index.js file to hold the JS file and a styles.scss file, if required. Additionally, Child components are created as subfolders inside the parent component.

Similarly in case of a Node.js backend project, it is recommended to follow the MVC architectural style. You'll have a separate folder for models, which represents the database schema, another one for controllers, which coordinate between the requests we get from frontend, and the business logic, and the services folder, which holds the business logic and makes the API/Database calls.

This kind of structure ensures that if we want to add a service, we very easily are able to do it by adding a file in the services folder, without touching the logic for the models or controller.

This might seem like an unnecessary exercise when there're a few components, but as applications scale to hundreds, or thousands of features, this organization is what keeps the project manageable.

5. Static Code Analysis - Linting

Linting is the process of checking for basic structural and syntactical correctness in your code, statically, that is, without actually running it. This includes checking formatting of your code, checking redeclaration of variables, poor error handling and lots more.

This is an automated way of improving what was once done manually - a developer would write some code, another senior developer would review it and suggest these style changes and syntactical error rectifications. However, this hurts developer productivity. Linters are scripts that run through the code, check for these issues, and in most cases, even create a commit after fixing the issues, so that you don't waste time on doing this 'menial' stuff.

We have ESLint for JavaScript, SonarQube for Java, Pylint for Python and so on.

These are commonly used in teams, and can be implemented in pet projects to focus on code quality without spending time on it.

6. Testing

This is, by far, the most important, and most unheeded piece of the Software Development life cycle. I am yet to hear of a case in my lifetime, where I saw a pet project that was tested. It's a whole different ball game in industry projects, however - every project depends on it NOT failing for something, anything the user might do. Mistaken email formats, hitting the back button anytime, and so on. Not to mention the stuff that can go wrong due to network issues - especially in case of critical applications like payment apps.

Imagine if a user is carrying out a large transaction, the bank's servers catch up and the transaction fails, but the user is anyway shown the money deducted popup - imagine the frustration. Testing ensures that such cases are minimized.

Testing in bigger companies is a process as complex as the development itself, however, you need not follow all stages in your pet projects. You can start with unit testing your code, that is, testing separate modules, files, components, to ensure that that particular component works well in isolation. Frameworks like Angular already provide the test files inbuilt, and you only need to tweak them slightly and run them. In React, you can use a library like React-Testing or Jest. Similarly for Java you have JUnit. This type of testing ensures that there's nothing wrong with your component logic - a mistaken API call, an incorrect query and so on. This however, isn't it.

You need to make sure that your entire application works in a good flow. You have to emulate a user's journey through your app as closely as possible, and account for each case - what if the user makes a mistake with the email, what if he/she presses the back button before the transaction is done, and so on. End to end tests ensure that this flow goes on - using libraries like Cypress or Protractor for React, Angular or Selenium etc for Java.

7. Regular commits

We usually develop our projects on our local system, and once we're done, we push it to Github, to ensure that we can put up the links in our resume. That however, isn't the right way to use version control, and definitely not the way it works in the industry. 

In the industry, version control is used for collaboration between multiple developers who work on various branches/forks, and in case of bugs, track what change was the bug introduced in. There's also a concept of Continuous Integration, which means that code is released in increments, tests are automatically run on it, and that code is integrated into the main central codebase.

All of this is pretty easy to implement in our projects too.

First, set milestones in your project that will determine when an important feature has been implemented or done. For instance, adding the css for a login form, creating the core logic for checkout, and so on. Every time you hit a milestone, you create a new branch, make a commit, and instead of pushing directly to the main branch, you raise a pull request.

Now, you go to Github, and merge it into your main branch. Here an additional step that can be taken up is writing automated tests. Tests that run on each deploy to ensure that it builds well and doesn't break anything. This can be configured using the deployment tools like Netlify. Further details in the deployment section.

The advantage of this process is that this is exactly how things work in the industry - different developers are responsible for different features, so instead of pushing everything on the main branch, they create separate branches and raise pull requests.

8. Code review

This is a process which is norm, necessary and critical in software development teams. There'll be at least 2 other developers who'll look at the code you wrote, to check if it's structured well, logically sound, follows all requirements. This ensures that more bugs can be caught out at the early stage, before moving to the testing environment.

Code reviews are usually done by experienced developers who have already seen lots of code, and thus, are very clear on the common pitfalls and checkpoints they have to ensure are ticked.

Now, in your pet project, in most cases, you'll be working individually, and that means that you don't have anyone to review your code. Anyone but you, that is. And that's what you have to do. Read through your own code. Try to figure out if there are some pieces that can be optimized, refactor it, add helpful comments. 

Reading code is a monotonous exercise, especially when you'd written it yourself, but it's critical to ensuring quality, and something you're gonna spend a lot of time doing in the industry, so do develop this habit.

Once you think your code is as optimal and clean as you can make it, mark it reviewed(Github has a feature for that), and only then merge the PR.

9. Deployment

So you did a project, which rn, runs on [localhost](http://localhost):8080. You know how it works and looks like, but how're you gonna show it to others. You can't expect every potential interviewer to download your source code, install the dependencies and run it to check. Moreover, no software project is ever made to live on localhost - it has to go to what is called a 'production environment' sometime, where actual users use it.

There's various levels at which you can deploy your project, and they differ based on the tech stack of your project. If it's just HTML, CSS, JS, you can directly activate Github pages from your repository settings and the project will immediately be live on <project-name>.github.io . 

In case of frontend projects involving a JS framework/library like React, Angular etc, you have to use a platform like Netlify, Vercel or Heroku. Netlify is the easiest of the lot. All you have to do is connect your github repo to your netlify account, specify the 'build' command, and that's it. You'll get a deployed link within minutes. Vercel is similar.

Note that backend projects like NodeJS have to have their server on all the time, unlike projects like React, which only build once, and then serve  an index.html file and run JS on the browser. Thus, Netlify/Vercel won't work for backend projects, where you need your server to remain on to accept requests and send responses. Heroku is a good option to start with in this case. It works similar to Netlify in terms of setting up the project.

These platforms, however, abstract away several complexities of deployment, and these are almost never used in software industry settings. In the industry, we use cloud solutions like AWS EC2, GCP or Azure hosting. These provide us servers where we can store and run our app, and they're guaranteed to stay up more than 99.5% of time. These cloud solutions have a zillion other features such as setting up load balancers, domain mapping and more, all of which are common in the industry. 

The only concern is that these platforms have a very limited free tier, and if you're not very careful, you could end up getting an extravagant bill, so when you use these, make sure you follow a decent tutorial, and do not do something without understanding its implications. My record is getting a 4 lakh bill from AWS.

Thus, following these steps will set you off on a journey to do your pet projects in a much more professional, industry-oriented fashion, so that you do not face a lot of trouble when entering the industry.

### Optional


1. Team/group projects

    Almost no project in the industry is done by a single person. Even if there's just one developer, there'll be one designer/product manager/tester alongside. And working in a team is world apart from working individually. You have to understand others' code, designs, priorities and tweak your code and thinking accordingly. 

    This point is still optional because group projects aren't possible or feasible for everyone. However, if you can, find a group of 2-3 like minded friends and do a project together. Assign features to different members, have regular meetings, review each others' code, and it'll literally be like working in the industry.
