Client Side vs Server Side rendering

This is a hot topic for technical interviews, and when you're a business trying to optimize your user experience and SEO.

The difference, as the name suggests, is in where the content gets 'rendered'.

Modern day webpages are a combination of HTML, CSS, JavaScript. We all know that. But there's small difference in how the HTML is rendered. 

Most webpage content comes from network requests made from JavaScript, either native JS, or using frameworks/libraries like React, which uses ReactDOM.render(), to render stuff to the screen.

To think about this, remember when you started youtube with a shitty internet? There's a layout, a lot of blank boxes and figures appearing, before the actual videos and other clickables come up? 

That's what it is - the HTML is populated in the browser, through the JavaScript. That, is client side rendering - rendering in the client, aka the browser.

And what about server side rendering? As it suggests, the server sends you an HTML page populated with everything. This means, that you wouldn't see the layout of the YouTube, ever, if the site were exclusively server side rendered.

What are the potential benefits and pitfalls of each?

In case of SSR, the server sends an HTML page, populated. This is good, but think about when you click a link that'd need an additional resource. You go all the way back to the server, wait for it to make the new HTML, then send it. 

Duhh.

In case of CSR, the server doesn't create the HTML page - it just sends in a layout(the boxes and figures), and the JS library/framework would then run to populate the page. That would make it slower than SSR, but if you were to redirect to another page, it wouldn't have to go all the way back to the server, since it's handled by the JS, right in the client.

Thus, to cap it all, the difference is between when and where the HTML is created : if it's on the server, it's SSR, and if it's in the browser with the help of a library like React, it's CSR.

Here are some advantages of SSR : 
	- SSR is usually thought to be better for Search Engine Optimization, since the crawlers can crawl the actual HTML content, since that's already made server side.
	- The initial page load is faster - as discussed above, the browser doesn't have to do any work, making it decidedly faster.
	- Great for static sites - no brainer there, since the whole point of making things CSR was for more efficient interactivity.

Here are the pros of CSR : 
	- Reduced frequency of server requests, leading to an overall fast rendering - although the first load takes time, the subsequent loads are faster, making it faster for sites having multiple pages
	- Rich site interactions - the exact counter of point 3 in the pros of SSR above. With JS being run in the browser, gives us interactivity and viewability at the same time.

That was it, for SSR and CSR. Well, almost it. But we developers are always looking to make things better, and that means, looking for a way to get the best of both worlds - aka, the speed of the first load as given by SSR, and the speed of subsequent loads via CSR. 

Can that work? Find out in my next probe