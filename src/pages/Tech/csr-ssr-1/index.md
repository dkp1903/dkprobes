---
title: The whole CSR SSR saga - a series Part 1 - Intro to Rendering and SSR
date: "2021-05-17T08:40:32.169Z"
description: What they are, their pros and cons, and what to use when
tags: ["tech"]

---

The modern web is built around websites trying to show us data as 'efficiently' as possible. Now, I say efficient, and not 'fast' or 'optimal' or 'light' or 'recent', because each of these are use cases that websites can focus on. Meaning, some websites might want to have data as recently updated as possible, some might make do with slightly obsolete-ish data, but instead deliver it super fast to the user.

And with the development of frameworks that use different techniques to render data, it is interesting to understand what each of the types of rendering are, and which one might work for you.

To begin with : Rendering means to display content on the web. How do you display content on the web? If you had asked this in the early 2000s, we'd have said HTML and CSS, rarely any JS. Sites were more like images - you could see and enjoy, but could practically do nothing with it.

Then came the JS, which allowed us to add interactivity to web pages. This means button clicks, animations, popups, toggles and so on.

Then came the JS frameworks(yes they are a world apart from the JS of yonder) - starting with things like AngularJS, then to React, Angular, Vue and more recently, NextJS, Gatsby, Svelte. Each of these had slightly different ways of rendering content on the browser.

Initially, all content was on the server - users' computers were super slow, and couldn't be trusted to run a lot of JS. Can you imagine your knocked out old box of a computer of the early 2000s running a high tech, RAM-intensive browser? Neither can I

And that means that the developers of then trusted only their servers to create webpages, then just send the webpages over to the client to view. Note the term - view, not interact. Interactivity is added by JS, and JS always runs on the browser. So, that meant the the browser would first get an html page complete with content, but hardly interactive. Then, the Javascript files associated with the html page would be downloaded and run on the client's browser. Only once those JS files are done running, would you be able to do anything click-y on your webpage. 

This was the initial SSR - Server Side Rendering. Your content is RENDERED on the server, and the entirely populated HTML is sent to the browser for view.

Makes sense, no? You utilize the server's faster RAM to create HTML pages, and then just send it to the user to view. The initial SEO (Search Engine Optimization) was also based on this type of rendering

> Tool tip : SEO is the process by which Google's or any other search engine's bots(called crawlers), parse the content of your website, pick up keywords, and associate them with your webpage. For instance, this website would have keywords of 'rendering', 'csr' and 'HTML'. Thus, when a user searches on Google for HTML, this website should be shown up as one of the search results.

SEO (of then) needed to parse the content of the website to be able to pick off the keywords. And this, it was able to do because the entire content was created on the server, available for the public eye, which meant that the crawlers could view the content and index it accordingly.

But now, life goes on. Websites started becoming multi page - apart from just the index.html page that we used to have before, now we have the /about.html page, the /team.html page, and so on.

And every time the user tries to go to a new page, a network request is sent by the browser to a server, the server runs at top speed to generate the HTML page, the entire HTML page (which is heavy - think big images and other memory heavy assets) is sent back to the browser. This meant a lot of network bandwidth requirement - which wasn't a given in those days.

There had to be an alternative.

There was.

Enter CSR, or Client Side Rendering.

To be discussed in the next article.title: The whole CSR SSR saga - a series
date: "2021-05-17T10:40:32.169Z"
description: What they are, their pros and cons, and what to use when
tags: ["tech"]

---

The modern web is built around websites trying to show us data as 'efficiently' as possible. Now, I say efficient, and not 'fast' or 'optimal' or 'light' or 'recent', because each of these are use cases that websites can focus on. Meaning, some websites might want to have data as recently updated as possible, some might make do with slightly obsolete-ish data, but instead deliver it super fast to the user.

And with the development of frameworks that use different techniques to render data, it is interesting to understand what each of the types of rendering are, and which one might work for you.

To begin with : Rendering means to display content on the web. How do you display content on the web? If you had asked this in the early 2000s, we'd have said HTML and CSS, rarely any JS. Sites were more like images - you could see and enjoy, but could practically do nothing with it.

Then came the JS, which allowed us to add interactivity to web pages. This means button clicks, animations, popups, toggles and so on.

Then came the JS frameworks(yes they are a world apart from the JS of yonder) - starting with things like AngularJS, then to React, Angular, Vue and more recently, NextJS, Gatsby, Svelte. Each of these had slightly different ways of rendering content on the browser.

Initially, all content was on the server - users' computers were super slow, and couldn't be trusted to run a lot of JS. Can you imagine your knocked out old box of a computer of the early 2000s running a high tech, RAM-intensive browser? Neither can I

And that means that the developers of then trusted only their servers to create webpages, then just send the webpages over to the client to view. Note the term - view, not interact. Interactivity is added by JS, and JS always runs on the browser. So, that meant the the browser would first get an html page complete with content, but hardly interactive. Then, the Javascript files associated with the html page would be downloaded and run on the client's browser. Only once those JS files are done running, would you be able to do anything click-y on your webpage. 

This was the initial SSR - Server Side Rendering. Your content is RENDERED on the server, and the entirely populated HTML is sent to the browser for view.

Makes sense, no? You utilize the server's faster RAM to create HTML pages, and then just send it to the user to view. The initial SEO (Search Engine Optimization) was also based on this type of rendering

> Tool tip : SEO is the process by which Google's or any other search engine's bots(called crawlers), parse the content of your website, pick up keywords, and associate them with your webpage. For instance, this website would have keywords of 'rendering', 'csr' and 'HTML'. Thus, when a user searches on Google for HTML, this website should be shown up as one of the search results.

SEO (of then) needed to parse the content of the website to be able to pick off the keywords. And this, it was able to do because the entire content was created on the server, available for the public eye, which meant that the crawlers could view the content and index it accordingly.

But now, life goes on. Websites started becoming multi page - apart from just the index.html page that we used to have before, now we have the /about.html page, the /team.html page, and so on.

And every time the user tries to go to a new page, a network request is sent by the browser to a server, the server runs at top speed to generate the HTML page, the entire HTML page (which is heavy - think big images and other memory heavy assets) is sent back to the browser. This meant a lot of network bandwidth requirement - which wasn't a given in those days.

There had to be an alternative.

There was.

Enter CSR, or Client Side Rendering.

To be discussed in the next article.