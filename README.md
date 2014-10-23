# Ember-i18n-example

This is a proof of concept app for dealing with basic I18n needs in ember that I plan to extract into an addon.

It assumes that there is one language used as the default and embedded in the app, and others will be loaded as external javascript as needed. I haven't fully flushed out the "others loaded as needed" part yet.

### Alternatives

There is an existing library out called [ember-i18n](https://github.com/jamesarosen/ember-i18n), but it supports much more than the simple use cases I need. It also does not work with Ember >= 1.9 and renders out script metamorph tags.

[format.js](http://formatjs.io) also looks promising, but it also does quite a bit more than I need. There is some overlap with the I18n built into momentjs, which I use on all my ember projects already anyway.