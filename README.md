# bitpaper-status

Bitpaper's Status Pages.

**Important:** Keep this repository public.

## Installation

```bash
# git clone this, cd into the folder and...
$ bower install
```

## Run

Just serve the root directory with the server of your choice.

## How it works

When loaded, the page runs some checks to see if BitPaper is fit for use.

The checks are:

- Does [BAPI][bapi] `/status` endpoint and [Bitpaper UI][bui] respond to `HEAD`
  requests, promptly?
- Are all Issues in this repository's [Issue List][bp-status-issues] **closed**?

If any of the above fail then the status is considered to be
failing, otherwise it's marked as OK.

### Previous Issues

The status page also displays a list of all existing Issues and their comments.

#### Note

- You should mark an Issue as closed after you resolve it so it appears as
resolved in the status page.

## Deployments

Pushing to the `master` branch triggers a deployment to
https://status.bitpaper.io.

## Configuration

You can directly set the Github Issues URL and the service check URL's
on the `<issue-viewer>` element in `index.html`.

```html
<issue-viewer
  known-issues-url="https://api.github.com/repos/TheProfs/bitpaper-status/issues?state=all"
  service-check-urls="https://api.bitpaper.io/api/v1/status, https://bitpaper.io">
</issue-viewer>
```

## Authors

- Nicholas Kyriakides, [@nicholaswmin][nicholaswmin]
- [TheProfs][the-profs] (Owners)

[bui]: https://github.com/TheProfs/bitpaper
[bapi]: https://github.com/TheProfs/bitpaper-api
[bp-status-issues]: https://github.com/TheProfs/bitpaper-status/issues
[nicholaswmin]: https://github.com/nicholaswmin
[the-profs]: https://github.com/TheProfs
[gh-page-overview]: https://pages.github.com/
