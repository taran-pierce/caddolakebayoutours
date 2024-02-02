# caddolakebayoutours `7`
Caddo Lake Boat Tours website built in React using NextJS.

## Setup for development
* `git clone https://github.com/taran-pierce/caddolakebayoutours.git`
* cd into `/frontend/` and run `npm install`
* `npm run dev` - Compiles the site and starts the dev server
* Pages are all located in `/frontend/pages/`
* Components are located in `/frontend/src/components/`

## Build for production
Merging into the branch (currently feature/rework-site-in-typescript-nextjs) kicks off the build in Azure

### Items to fix
- PWA
  - URL is not valid
  - "display" property is not valid
- Facebook Share goes away when you navigate
  - also not positioned correctly
- Contact form is not working
  - looks like its still using localhost
  - input fields also empty out randomly
- Google Map
  - needs to have "Caddo Lake Bayou Tours" selected
- Photo Gallery
  - better transitions
  - better navigation