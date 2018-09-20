# bitpaper-status
Bitpaper Status Pages

## Installation

```bash
# git clone this, cd into the folder and...
$ npm install && bower install
```

## Run

Just visit `index.html`.

## How it works

The page:

- Sends `GET` calls to BitPaper's main site and API. This is called the
  *Auto Health Check*.
- Checks a `json` file for any manually added *Known Issues*,
  marked as unresolved.

If *Auto Health Check* calls fail, or there is a *Known Issue* marked
as *unresolved*, the status is considered to be failing, otherwise it's marked
as OK.

### *Auto Health* Check

This page will automatically try to fetch https://api.bitpaper.io and
https://bitpaper.io, with a timeout.

If any of those `GET` calls fail, the automated *Health Check* is considered
failing and the *Health Check* indicator turns orange.

### Manually adding a *Known Issue*

This server has a `current-status.json` file in the root directory. Add
issues in the `issues` array and mark them as `"resolved": false` and push
to `master` branch.

This causes the *Known Issues* indicator to turn orange, to indicate that
there is a *Known Issue* and that BitPaper probably won't be running normally.

The *Known Issue* will also be showing in a list below the status indicators.

When you're done fixing the error, just mark that issue as `"resolved": true`,
and push to `master` branch.

## Deployments

Pushing to the `master` branch triggers a [Github Pages][gh-page-overview]
deploy of this at `https://TheProfs.github.io/bitpaper-status` which is CNAMED as
https://status.bitpaper.io.


## Authors

- Nicholas Kyriakides, [@nicholaswmin][nicholaswmin]
- [TheProfs][the-profs] (Owners)


[nicholaswmin]: https://github.com/nicholaswmin
[the-profs]: https://github.com/TheProfs
[gh-page-overview]: https://pages.github.com/
