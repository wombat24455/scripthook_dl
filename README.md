# scripthook_dl

Scripthook_dl was a side project I created because I was too goddamn lazy to keep checking the Scripthook website to see if Scripthook V had been updated to the latest version.

## How it works

It downloads the files from the [scripthook](http://www.dev-c.com/gtav/scripthookv/) website, separates Scripthook from all the useless crap that is not needed, deletes the folder it downloaded and notifies you depending on if it downloaded a new version of Scripthook or not.

Notification for when no new versions have been found:

![example1](https://uhohstinky.s-ul.eu/DgwCwVF7.png)

Notification for when a new version has been found & downloaded:

![example2](https://uhohstinky.s-ul.eu/lPeYz7Z5.png)

## Requirements

- [Node.js](https://nodejs.org/en/) version >= 12.17.0

### Dependencies required

- [node-notifier](https://www.npmjs.com/package/node-notifier) version >= ^10.0.0
- [website-scraper](https://www.npmjs.com/package/website-scraper): ^4.2.3

You can also check the dependency requirements [here](https://github.com/website-scraper/node-website-scraper) and [here](https://github.com/mikaelbr/node-notifier).

Or you can have a look in [`package.json`](package.json) for the dependencies required.

## Usage

All you need to do is run the [`start.bat`](start.bat) file and let it do its thing.

(WIP) You can also use the non-notification version with the [pterodactyl panel](https://pterodactyl.io/) as long as you have the [`discord.js`](https://github.com/parkervcp/eggs/tree/master/bots/discord/discord.js) egg available.
