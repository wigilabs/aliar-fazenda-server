'use strict'

/*
|--------------------------------------------------------------------------
| Routes A.C.A.B
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
//import Craft from '../lib/objCrafter.js'
const Craft = require('../lib/objCrafter.js');
const data = new Craft();
const odata = data.craftOdata('sect','nam','l1','v1','l2','v2','l3','v3','l4','v4')
const Route = use('Route')
Route.on('/').render('welcome')
Route.get('/rest', ({request}) => {
    return {odata}
})