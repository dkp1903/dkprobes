Understanding the NodeJS philosophy

A point not widely understood by newbies, every software has a philosophy, a set of practices of how you architect code. This philosophy might come from the folks who create and maintain the application, such as Node's small core system, or community used standards, which is just a general consensus on the best way to build things - for instance, you write your routes inside a routes directory, and not inside components.

An understanding of the philosophy and best practices is critical to understanding why Node is the way it is(Java peeps argue why you just can't use a lot of threads), why we should write code the way we do(I couldn't really wrap my head around the MVC architectural style during an internship)

1. Small Core - Node is an ecosystem, you might have heard developers rant. But what does that even mean? If you just try and think back to your last Node project, you'll realize that most of the code you write, is via packages that you install from PMs like NPM or Yarn. Node itself is pretty small. And the advantage is that by not endorsing a specific method of doing something, you're keeping it open for improvement. 

For instance, Express was a de facto common middleware used in Node applications. Then, the same team that created Express, came up with Koa, which supported Async calls more easily. Had Express been incorporated in the Node core, this innovation might not have come about.

2. Small Modules - Newbies, like I once was, might scoff when developers call scripts having hundreds of lines of code 'small', but when you see large scale applications, it does look small, trust me. Moreover, the size isn't just in code size, but also the scope - what the code is supposed to do. 

'Make each program do one thing, and do it well.'