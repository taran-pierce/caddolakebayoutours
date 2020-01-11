# caddolakebayoutours `2.3.14`
Caddo Lake Boat Tours website built in React.

## Setup for development
* `git clone https://github.com/taran-pierce/caddolakebayoutours.git`
* `npm run dev` - Compiles the site and starts the dev server
* Pages are all located in `/pages/`
* Components are located in `/components/`
* Browser refreshes automatically on all changes except changes to `server.js`, which requires a the dev server to be restarted.

## Build for production
Once all changes are ready to be deployed to production.
* `npm run build` - prepares and optimizes the build for production.
* `npm run export` - statically generates the site into the `/out/` directory.
  * the site has `.htaccess` rules to route everything to `/caddolakebayoutours/out/`
  * if updates are made to `.htaccess` the file needs to be copied over to `/public_html/` 

## Update production - (currently on `develop`)
* ssh into server
* cd to proper `/dir/`
* `git remote update`
* `git pull origin develop`

### Important details
* `next.config.js` - has the export map for pages so it can be statically generated
* `server.js` - not much being done here as the email is handled in a different app
* `/pages/` - automatically routes any `.js` file to a page on the site
* `/components/` - place all components here and their `.scss` files

## Directory structure should look as follows:
```
  /caddolakebayoutours
  |
  |-/pages
  |-/components
  |-/static
  |  |-/css
  |  |-/images
  |-/styles ( not sure I actually use this )
```
