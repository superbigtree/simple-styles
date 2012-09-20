# simple-styles.css
This started as a fork of the skeleton css framework and is now becoming a mashup of all my favorite parts of skeleton, bootstrap, 320andup, zurb's foundation, and other cool resources.

##another css framework? shut up.
I know, right? Don't worry about it.  
This is mostly for my own learning, to use as a teaching tool, and to experiment with css.  

I think there's a lot of room for experimentation in css/js frameworks. A good css/js framework is likely one that is specific to the methods and habits of an individual designer or design team.

Projects like [initializr](http://www.initializr.com/) help out with that a lot.  

But shit, why not take it a little further? Base your own little css framework on those that already exist, and compile the js libraries you use most. Package it up the way that's most useful to you: as a gem, npm package, index.html file with css and js directories, or whatever suits your tools and development style.  

Use _simple-styles.css_ if you want. Rip out the chunks that aren't useful to you and add in other stuff. Whatever.

Do what works for you.  

### goals for simple-styles.css:
- small & simple  
- accessible 
- document everything. 
  - simple-styles.css should almost be more like a commented guide for creating a css framework than an actual framework.  

### roadmap:
- make sure other frameworks are credited and their license is intact when i outright cop their code.
- analyze zurb's foundation, and twitter's bootstrap.
- consider how best to approach css components based on my experiences with bootstrap.
- figure out if i want to port this over to sass or stylus. and make a gem or npm package? or maybe both. 
- study web accessibility more thoroughly and include standard accessibility patterns.
- work on:  
  - forms
  - typography
  - ui elements like alerts, breadcrumbs, tabs, nav, pagination, etc.

### currently uses/emulates these projects:
- __skeleton__
  - adopted and revised skeleton's grid style.
  - copied css for .clearfix and other clearing

- __320andup__
  - based the media queries primarily on 320andup. it's actually mobile first. it's weird how some other css frameworks don't do that.
- __twitter's bootstrap__ 
  - i revised some of the grid stuff based on what i learned from bootstrap.
- __eric meyer's css reset__


## License 

(The MIT License)

Copyright (c) 2012 sethvincent &lt;sethvincent@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.