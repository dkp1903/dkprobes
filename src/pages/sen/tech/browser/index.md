When we were little, browsers used to be these things you go to, when you want to look up stuff online. It was a gateway to the internet.

Come the world of software development, and the first major realignment of thought is how we think about browsers.

A browser ceases to be a large black box for an encyclopedia, and rather changes to one huge software application, with a variety of elements, engines and APIs that work together to get data from the World Wide Web and present it to us.

For any entrants to Front End Web Development, it is critical to understand how the browser works, because, well, most of what they make is going to run on the browser.

1. Client Server Model - Most of the web is based on this premise - there's a client that's seeking information, and a server that has the information and gives it, provided that you ask it nicely, aka, following a protocol. This may be misleading at times, but the browser is the client, and the Web server, the server. The browser requests information on the user's behalf, because we can't talk very nicely to the web servers, and the server responds with the info we want.

2. The browser is not one thing, no - it is rather a huge superset of multiple moving parts, each working in conjunction with the other. The architecture can be understood using something like this - 

![](./browser-arch.png)

	a. UI - The loud talker - what we see, and what, until we entered in the world of Software, we thought the browser was.
	b. The Browser Engine - The middleman - who communicates between the UI, and the person doing the actual work.
	c. The Rendering Engine - The guy who does all the heavy lifting - parsing the XML coming from the network request and rendering the HTML, CSS pages.
	d. Networking - The outreach guy - who talks to the outside world, getting things in for the rendering engine to play around with it.
	e. JS interpreter - Remember, JS is an interpreted language(If you don't know what that is, check out my post [here](../compiler-interpreter)). And JS works with all of the other components - gets input from the UI, makes network requests, brings interactivity based on user inputs, so this guy picks out chunks from the JS script, and allots it to the components responsible for handling each.
	f. Data Persistence - the guy holding all the secrets - local storage, Filesystem, things that store cache, cookies, bookmarks and performance, essentially a miniature Database at the place where the browser is installed, in the local system(Somewhere in C drive, usually).


3. The DOM - The Document Object Model is a tree based representation of a webpage. The various tags in an HTML page are nodes of the tree. As expected, the HTML tag, that indicates the start of an HTML script is the root node. The DOM is used to represent the structure of the webpage, and any changes to the script are effected to this DOM. JavaScript is used to manipulate the DOM. How does that happen, let's see.

4. 




[Reference](https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509#:~:text=As%20a%20client%2Fserver%20model,device%20that%20supports%20a%20browser.)