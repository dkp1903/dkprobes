---
title: Are Static site generators really 'static site' generators?
date: "2020-07-28T22:40:32.169Z"
description: Knowing stuff is a world apart from being able to explain it well enough, and unfortunately, that's where people who are 'communicators' snatch away opportunities from the good guys.
tags: ["tech"]

---

It was the early 2010s, and the world was happy to be running on Wordpress sites. Wordpress is a CMS, a Content Management System. It allows non-developers to easily maintain websites, by abstracting away the development side of stuff. Users just have to add the content, and the rendering and stuff would automatically happen. 

Sweet, no? Gives a huge leap back from the time of HTML sites, wherein you had to hire developers to even help you make your blog page.

It was a sensation, true. At a time, more than 85% of the internet was powered by Wordpress sites.

But then, when something's going so well, there has to be something wrong. And there was.

When you hear 'static' sites, what do you visualize? Stuff that's static, isn't moving. Dull and dry. Right? You're right, to an extent. Static sites were pre-coded, HTML and CSS, and after deployment, whenever a user clicked, the entire HTML page would come up to them.

Wordpress changed this a little bit. It started using databases. Content is generated on the fly. Everytime a user clicks, server side code needs to kick off, it needs to hit the database, construct an HTTP response, send the data to the web server, which then CREATES an HTML file to display to the user. As opposed to this, what static sites did was just find an HTML page and send it. No dynamic creation, on-the-go

You can guess which was faster of the two.

That's not all. Security. With new technology, come new ways to break the technology, and with Wordpress, it was a lot easier.

Whenever there are databases involved, there's a risk of attacks via scripting, SQL DB injections, and the sort. Plus, Wordpress plugins, extensions made by third parties that made things simpler for the Wordpress users, often had security vulnerabilities, and that meant security was a major concern.

Now, the concern is, static sites are safe, but static sites are static. Dynamic sites are unsafe and slow, but they're dynamic. Can we get the best of both worlds?

Enter, JAMstack and SSGs. Static Site Generators.

Even though it's not intuitive, SSGs are a combo of dynamic and static : They code dynamic, and display static. And this is done with the help of the JAMstack. JAM stands for Javascript-APIs-Markup.

If you're familiar with APIs, these are essentially URLs that give you data when you hit them. That means dynamic content, without actually having to make a database and store stuff yourself. No database means none of those 