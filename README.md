##Semantic UI Infinite scroller 'visibility' bug with Meteor & React-Packages and Chrome desktop browser.

- There is a bug when using react-packages with MeteorJS and Semantic UI for infinite scroll. `onBottomVisible()` never fires.
- The bug occurs in Chrome (I'm using a MacBook) Version 44.0.2403.130 (64-bit).
- This works fine in Safari Version 7.1.7 (9537.85.16.12).

Also, this works fine in a ReactJS app in Chrome without Meteor, it's only when you use `react-packages` that this occurs. It also works with Meteor in Safari.

So far I've got it 1/2 working in Chrome (but only if do this):

1. Add this to index.html:
    <meta name="viewport" content="initial-scale=1" />

2. In Chrome Developer Tools turn on mobile device mode i.e. `Toggle device mode`.

3. Refresh the browser window, now scrolling down will fire `onBottomVisible()`.

I haven't figured out if there's a meta tag that will fix this when NOT in mobile browser emulation mode. i.e. on regular desktop.

- end -