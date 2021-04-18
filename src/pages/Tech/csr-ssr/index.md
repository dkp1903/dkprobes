Client Side vs Server Side rendering

> Note : The SSR being talked about here is the SSR of the olden days, much before NextJS had taken the world by storm.
Discussion on NextJS is to be done in a coming probe.

This is a hot topic for technical interviews, and when 
you're a business trying to optimize your user experience and SEO.

The difference, as the name suggests, is in where the content gets 'rendered'.

In the olden days(aka, early 2010s), content used to be rendered on the browser, and a populated HTML file was sent to the client. This file was all look-goody, but had little to offer in interactivity, since
interactivity is brought by Javascript and that can only run on the client.

This is Server side Rendering, where a pre-populated HTML layout page is sent 
to the client, and interactivity is added later. 
What this translates to, is that a user is able to view 
the page much before she/he is able to interact with it.

That can be advantageous in the sense that the user doesn't spend precious seconds staring at a blank white page.

On the other hand, in Client Side Rendering, all the server sends at first, is a blank `index.html` file. Which file is this? If you'd have worked with React, you'd have seen an `index.html` file when you scaffold a Create-React-App application.

This `index.html` file looks something like this : 

```
  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
   
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <title>Your site title</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root" ></div>
   
  </body>

```

This is the `index.html` file that gets sent by the server initially.

As you can see, there's practically just one line in here which is a game changer : 

```
<div id="root" ></div>
```
This is what sets off the reaction that would make React run the Javascript to populate the data. But while that JS is running, 

there's nothing else to show, that's why the blank page, while the JS runs to load the content.

Now, each of these methods has their own set of advantages and cons: 

In case of SSR, the user is able to start seeing the content much faster - 
aka faster initial load. But now, the problem is, if you were to navigate to 
another route, such as /about, /education, each time, the new content has to be populated 
at the server, meaning that each time you wish to visit a new route, a request 
is sent to the server, the page is populated there, and the entire heavy HTML laden 
page is sent to the client. And every time, the JS is run to add interactivity.

And this isn't a great thing, given the large amount of data transfer, which can slow down the process.

Another good thing about SSR is search indexing. Since the content is already populated on the server, search engine crawlers 
are able to crawl the content, and thus, such websites gain a better footing in search results. 

In case of CSR, the first load will be slower, since the content will be populated only after all JS files have been downloaded and run on the client.
However, there are no additional requests made to the server. Only the `index.html` file keeps getting repopulated when the 
user navigates to different routes. Thus, all subsequent loads are much faster.

CSR isn't well suited for SEO. Search engine crawlers will see a blank page only on the server, which they crawl, and thus, aren't able to index the site based on the content it will carry when the JS is run.

Can we get the best of both worlds? Wait for my next probe to find out.