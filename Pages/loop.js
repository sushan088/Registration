'use strict';

let I;

module.exports ={
    _init() {
        I = actor(); //require('../steps_File.js')();
    },

    //insert your locators and methods here

    loopSubscription(){
        for (let i=0; i<=20000; i++){
            I.wait(2);
            I.amOnPage('/contacts#/u/32/activities');
            I.wait(1);
            I.click({css:'#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li.router-link-exact-active.active > a'});
            I.wait(1);
            I.click({css: '#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li:nth-child(3) > a'});
            I.wait(1);
            I.click({css: '#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li:nth-child(4) > a'});
            I.wait(1);
            I.click({css:'#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li:nth-child(5) > a'});
            I.wait(1);
            I.click('Notes & Terms');
            I.wait(1);
            I.click({css: '#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li:nth-child(7) > a'});
            I.wait(1);
            I.click({css: '#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li.router-link-exact-active.active > a'});
            I.wait(1);
            I.click('Conversations');
            I.wait(1);
            I.click({css: '#wrapper > div.page-content-wrapper > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div > div.ag-column--tabs > div.action-bar.container-fluid > ul > li:nth-child(10) > a'});
            I.wait(1);
            I.click('Education');
            I.wait(1);
            I.click('Other Information');
            I.wait(1);
            I.click('Check-In Logs');          
        }
    }

}