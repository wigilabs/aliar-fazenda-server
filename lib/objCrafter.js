'use strict'

class Craft {  
 craftOdata(sect,nam,l1,v1,l2,v2,l3,v3,l4,v4) {
   const person = {
      section:'',
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
  odata.section = sect;
  odata.name = nam;
  odata.lab1= l1;
  odata.val1 = v1;
  odata.lab2= l2;
  odata.val2 = v2;
  odata.lab3= l3;
  odata.val3 = v3;
  odata.lab4= l4;
  odata.val4 = v4;
  odata.debug();
  return odata;
                    }  
}

module.exports = Craft
