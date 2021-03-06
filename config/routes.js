/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'PlayerController.getPlayers',
  'get /readyplayer1': 'PlayerController.getPlayers',
  'get /g/:gameId': 'GameController.joinGame',
  'get /gm/:gameId': 'GameController.gmGame',

  'get /login': {view: 'login'},
  'post /login': 'AuthController.login',

  '/logout': 'AuthController.logout',

  'get /signup': {view: 'signup'},
  'post /signup': 'UserController.signup',

  'get /lobby/:playerId': 'Game.getGames',
  'get /lobby-gm': 'Game.getGmGames',

  'get /createplayer': 'PlayerController.createForm',
  'post /createplayer': 'PlayerController.createplayer',


  'post /removeNpc': 'GameController.removeNpc',

  'get /addnpc': {view: 'addnpc'},
  'post /addnpc': 'GameController.addNpc',

  'get /creategame' : {view: 'creategame'},
  'post /creategame' : 'GameController.createGame',

  'get /createitem' : {view: 'createitem'},
  'post /createitem' : 'ItemController.createItem',
  'post /useitem' : 'ItemController.useItem',

  'get /giveitem' :  'Item.listItems',
  'post /giveitem' : 'InventoryController.addToInventory',

  'get /editstats' :  'StatsController.listPlayersForGm',
  'post /editstats' : 'StatsController.updateStats',
  'get /draw':  {view: 'draw'},

  'post /createmap' : 'MapController.createMap',
  'post /createpage' : 'PagesController.createPage',
  'post /appendlines' : 'PagesController.appendLines',
  'post /assignActive' : 'MapController.assignActive', //sets the page for a map
  'post /game-assignActive' : 'GameController.assignActive' //sets the map for a game

};
