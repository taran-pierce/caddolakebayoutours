# Caddo Lake Bayou Tours
Boat tours of Caddo Lake.

## Setup
After cloning the repo you will need to `npm install` in `/caddolakebayoutours/`
Next `cd app` and `npm install`
From there you can use gulp to do various tasks.

### Gulp Commands
* `gulp` - default task will compile scss, move images and start up browserSync.
* `gulp prod` - task will prepare the project to be built for production. It will compress the images, compile the assets and move everything over to `dist`.

### NPM Tasks
* `npm run tar` - will create `website.tar.gz` to make deploying the website easier.

## Directory structure should look as follows:
This of course can be modified, but the gulpfile.js will need to be updated as well if you do so that all assets get placed in the location you are expecting.

```
  /caddolakebayoutours
  |
  |-app
  |  |-scss
  |  |-js
  |  |-css
  |  |-images
  |  |-fonts
  |  |-templates
  |  |-helpers
  |
  |-dist
```
