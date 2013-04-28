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
npm publish
npm unpublish
```

# status

This project is currently WORK IN PROGRESS!

# License

Copyright (c) 2012 Mark Wolfe
Licensed under the BSD license.
