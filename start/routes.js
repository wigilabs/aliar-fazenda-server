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
const Route = use('Route')
/* 

* Prueba de concepto objCrafter.js 
const odata = Object.create(struct);
odata.section='';
odata.name='';
odata.val1='';
odata.val2='';
odata.val3='':
odata.val4='';
*/

const person = {
   section:'Produccion',
    name:'',
    lab1:'',
    val1:'',
    lab2:'',
    val2:'',
    lab3:'',
    val3:'',
    lab4:'',
    val4:'',
    debug: function () {
    console.log(`>>> ${this.section}\n>>> ${this.name}\n`+
                `>>> ${this.lab1} : ${this.val1}\n`+
                `>>> ${this.lab2} : ${this.val2}\n`+
                `>>> ${this.lab3} : ${this.val3}\n`+
                `>>> ${this.lab4} : ${this.val4}`);
  }
};

const odata = Object.create(person);
odata.section = "Produccion";
odata.name = "Tractores";
odata.lab1= "Aparcados";
odata.val1 = "20";
odata.lab2= "En campo";
odata.val2 = "120";
odata.lab3= "";
odata.val3 = "";
odata.lab4= "";
odata.val4 = "";
odata.debug();
//End prueba de concepto
Route.on('/').render('welcome')
Route.get('/rest', ({request}) => {
    return {odata}
})