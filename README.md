# Micro Rendering Models
The smallest stateful self rendering class I could think of. 17 lines of code means state changes cause render!

# WARNING
Right now it's currently insecure in that things other than the instance can modify the instance. We might not like that because it could lead to XSS vulnerabilities if you store any sensitive data inside of it( HINT: You shouldn't be doing that ANYWAYS ).

Still for 17 lines of code it's a pretty impressive proof of concept in what can be done with vanilla JS.

## Why?
Okay time for some honesty. I'm sick of the current ways of doing things. React and Angular are GREAT frameworks, but HORRIBLE libraries. VueJS isn't much better. They're WAY over engineered. I just need a dom node, and a state where updates cause render. Is that to much to ask?

## How?
Well the javascript should be obvious enough. I wanted to use a more expressive syntax to do the same thing I've been doing with prototypes and ES3 functional classes for YEARS but in a way where it's harder to accidently add or screw up entire groups by extending prototypes( something a LOT of people still get wrong with JS ). Classes fixed that.  
Then it just became a simple "Follow the previous art in your own way" scenario where I want a new state object to make differentiating updates easy.  
Then we just needed to make state updates asynchronous from renders. We kind of abuse the event loop here to do this. When the stack is empty, we want to render then. Since in a well defined JS application the stack should ALWAYS empty at some point( otherwise you have an infinite loop ) it will render the next chance it gets. Long operations mean longer delays before rendering however.  
Extendability is a serious house with classes. Want to override how the state works? Extend the class. Want to override how the Dom node and state are externally available? Extend the class. Want to add new functionality for only a few instances? Extend the class. Now it's REALLY hard to pollute the prototype in a bad way with ignorance of how JS inheritance works( hopefully ). Just use JS classes correctly and you can even compose the extensions! Then feature checking is as simple as a `thing instanceof MyExtendedMicroModel`!

## What do I hope to accomplish?
Nothing really. I just keep re using this code over and over and over, and it's even made my co workers stop using React altogethor for a more JS experience( and better composition ). If you want to use it, here. Go ahead. We like it enough, you might too. Guess what I'm saying is 'Hello World'.

# FAQ
## Do I have to provide a DOM ID?
No, `document.getElementById(null) === null` and thus you can instantiate it as a store instead with a render method to cause updates to children with it's render method. `this.node` is just a conveince. It's not actually required.
## What if I just want a simple no-state dumb rendering object?
Extend the class and add a method to cause async rendering through the Web APIs your browser provides( I myself abuse setTimeout )
## Why do I have to provide an object as the first argument to the constructor?
Design choice to keep the footprint to the super from extensions easy to reason and do. Extend it with a new constructor if you want to change it's footprint. This just made it really easy to handle where a key would be( order of decleration in a object doesn't matter ).

This is in vanilla JS. The code is 17 lines of code. MDN is probably going to answer your questions, but if you have any I'd be happy to answer them. Submit an issue and I'll answer it. If it's good enough I'll add it to the FAQ!
