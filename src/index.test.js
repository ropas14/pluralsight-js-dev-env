import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

const { JSDOM } = jsdom;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says HELLO ', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom = new JSDOM(`${index}`);
     const h1 = dom.window.document.getElementsByTagName('h1')[0];
     expect(h1.innerHTML).to.equal("Hello babe Gal?");

  });
});
