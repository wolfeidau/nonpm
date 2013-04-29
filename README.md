# nonpm

This aim of this module is to establish whether I can make a small scale
npm replacement using node and leveldb. 

# goals

1. Learn more about how npm works, hopefully also convincing others to
   do the same.
2. Build a mini version of npm for use on private networks

Bonus points for:

1. Enable proxying of requests to the central npm repository.
2. Add an overlay of `extra` modules which are used in preference of the
   ones from the central npm.

# reverse engineering

As I like reverse engineering protocols and systems this project will
also enable me to test and illustrate some of the methods I use to do
this.

# commands

As I currently use only a subset of the commands available in npm I will
target those first. The ones I am going after are:

```
npm search
npm info
npm update
npm install
npm publish
npm unpublish
```

I plan to detail the interactions in a separate document and summarise the results here.

# schema

One of the big hurdles will be translating the existing couch schema into leveldb, as @dominictarr has already done a
lot of work in this area

# security

As there are a few things I am not really keen on in npm from a security perspective I will need to keep a log of these
just so I can raise them at a later date.

1. Currently npm will transmit basic authentication credentials over http without warning you about security of the
transport.

# other projects

* https://github.com/isaacs/ryp older project but illustrates some of the ideas in npm.
* https://github.com/dominictarr/npmd project by @dominictarr to do something similar more for caching though.
* https://npmjs.org/package/http-signature this is interesting and probably important in the future.

# status

This project is currently WORK IN PROGRESS!

# License

Copyright (c) 2012+ Mark Wolfe
Licensed under the BSD license.
