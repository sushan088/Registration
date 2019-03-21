'use strict';

let I;
var number = 's00';
var mail = 'sushan.shrestha+'+number;
var domain = 'introcept'+number;
var name = 'Sushan shrestha+'+number;
module.exports ={
    _init() {
        I = actor(); //require('../steps_File.js')();
    },

    //insert your locators and methods here
    
      async LiveSignUP(loop){
        
        I.wait(5);
        I.amOnPage('https://agentcis.com/sign-up/?token=9r8Ad0W8R0&email='+mail+'@introcept.co');
        I.wait(5);
        I.seeInField('full_name',name);
        I.wait(5);
        I.seeInField('company_name','Introcept');
        I.wait(5);
        I.seeInField('subdomain','introcept');
        I.wait(5);
        I.clearField('subdomain');
        I.wait(5);
        I.fillField('subdomain',domain);
        I.wait(3);
        I.fillField('password','agentcis');
        I.wait(4);
        I.fillField('phone_number','9876541232');
        I.wait(4);
        I.selectOption('country','Australia');
        I.wait(5);
        I.click('Start Free Trial');
        I.wait(7);
        I.see('Welcome to Agentcis.');
        I.wait(40);
        I.seeInCurrentUrl(domain+'.agentcisapp.com/onboarding?is_first_login=true');
        I.wait(3);
        I.click('I am ready!!');
        I.wait(5);
        I.click('Proceed to next');
        I.wait(5);
        I.click('Proceed to next');
        I.wait(5);
        I.click('Proceed to next');
        I.wait(5);
        I.click('Proceed to next');
        I.wait(5);
        I.click('Proceed to next');
        I.wait(5);
        I.click('Go to Dashboard');
        I.wait(8);
        I.seeInCurrentUrl('/overview');
        I.wait(5);
        I.click({css: '#wrapper > nav > div > div.ag-top-toolbar__right-section.pull-right > ul > li:nth-child(5) > div > a'});
        I.wait(10);
        I.click({css: '#wrapper > nav > div > div.ag-top-toolbar__right-section.pull-right > ul > li:nth-child(5) > div > div > a:nth-child(1)'});
        I.wait(10);
        I.click({css: '#manage-account > li:nth-child(3) > a'});
        I.wait(4);
        I.click('Change Subscription');
        I.wait(5)
        I.seeInCurrentUrl('/settings/subscription');
        I.wait(4);
        I.click({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(1) > div.plan-container.ui.grid.two.column > div:nth-child(2) > div > span.tick.col-hr-4.col-hr-1.plan-tick'});
        I.wait(3);
        // I.clearField({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > div > div.plan-side > div.box.bd-bottom > div.ui.form.col-v-4 > div:nth-child(1) > div'});
        // I.fillField({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > div > div.plan-side > div.box.bd-bottom > div.ui.form.col-v-4 > div:nth-child(1) > div'},'5');
        I.wait(5);
        I.selectOption({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > div > div > div > div.plan-side > div:nth-child(2) > div > div > div.five.wide.field.paddingNone > select'},'100GB');
        I.wait(5);
        I.see('Total Plan Amount');
        I.wait(5);
        I.see('240');
        I.wait(5);
        I.see('Storage Add On');
        I.wait(5);
        I.see('60');
        I.wait(5);
        I.click({css:'#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(4) > div > button.pull-right.button.blueButton'});
        I.wait(5);
        I.see('Card Details');
        I.wait(5);
        I.click({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(2) > div.ui.grid > div > div > div > div.ui.grid > div.nine.wide.column > div > button'});
        I.wait(5);
        I.see('Billing Address');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div:nth-child(1) > div.ag-card > div > div.twelve.wide.column > div.ui.doubling.stackable.one.column.grid > div:nth-child(1) > div > input[type="text"]'}, 'Test Card');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div:nth-child(1) > div.ag-card > div > div.twelve.wide.column > div.ui.doubling.stackable.one.column.grid > div:nth-child(2) > div > input[type="tel"]'}, '1010101010101010');
        I.wait(3);
        I.selectOption('#expiry_month','6');
        I.wait(3);
        I.selectOption('expiry_year','21');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div:nth-child(1) > div.ag-card > div > div.twelve.wide.column > div.ui.two.column.grid > div:nth-child(2) > div > input[type="number"]'},'592');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div.ui.doubling.stackable.one.column.grid.col-v-2 > div > div > input[type="text"]'},'20/355 test road');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div.ui.doubling.stackable.two.column.grid > div:nth-child(1) > div > input[type="text"]'},'Dhobighat');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div.ui.doubling.stackable.two.column.grid > div:nth-child(2) > div > input[type="text"]'},'Lalitpur');
        I.wait(3);
        I.fillField({css: '#BJWtHz2REV-content > form > div.ui.doubling.stackable.two.column.grid > div:nth-child(3) > div > input[type="tel"]'},'0977');
        I.wait(3);
        I.selectOption({css: '#BJWtHz2REV-content > form > div.ui.doubling.stackable.two.column.grid > div:nth-child(4) > div > div > div > div > div'},'Nepal');
        I.wait(3);
        I.click('Add Credit Card');
        I.wait(4);
        I.click({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(2) > div.ui.grid > div > div > div > div.ui.grid > div.nine.wide.column > div > div > div > div > div > div > span.tick.col-hr-4'});
        I.wait(3);
        I.click('Proceed');
        I.wait(8);
        I.see('You have successfully updated your subscription plan.');
        I.wait(5);
        I.click({css: '#wrapper > nav > div > div.ag-top-toolbar__right-section.pull-right > ul > li:nth-child(5) > div > a'});
        I.wait(10);
        I.click({css: '#wrapper > nav > div > div.ag-top-toolbar__right-section.pull-right > ul > li:nth-child(5) > div > div > a:nth-child(1)'});
        I.wait(10);
        I.click({css: '#manage-account > li:nth-child(3) > a'});
        I.wait(4);
        I.click('Change Subscription');
        I.wait(15)
        I.seeInCurrentUrl('/settings/subscription');
        I.wait(4);
        I.click({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(4) > div > button.pull-right.button.blueButton'});
        I.wait(5);
        I.click({css: '#wrapper > div.page-content-wrapper > div.container-fluid.col-v-5.relativePosition.relaxed > div:nth-child(4) > div > div:nth-child(2) > div.ui.grid > div > div > div > div.ui.grid > div.nine.wide.column > div > div > div > div > div > button'});
        I.wait(5);
        I.seeElement({css: '#confirmModal > div > div'});
        I.wait(5);
        I.click('Accept');
        I.wait(5);
 
        I.wait(10);


    },
}
