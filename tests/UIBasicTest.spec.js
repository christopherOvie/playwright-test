const {test, expect}= require ('@playwright/test');
  //import {test, expect} from '@playwright/test';

 // test.describe('test suite',()=>{

// test('browser context declaration', async ({page})=>{
// //chrome-plugin/cookies
// const context=await browser.newContext();  //browser instance is open
// const page=(await context).newPage();  //new page is opened
// await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
// //console.log(await page.title())
// //await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy') 
// });
//   npx playwright test    
  //npx playwright show-report //tests\UIBasicTest.spec.js
  //npx playwright test UIBasicTest.spec.js --headed --project=chromium

test('page playwright test', async ({browser})=>{
    const context=await browser.newContext();  //browser instance is open
     const page=await context.newPage()
  const username=page.locator('#username')
  const password=page.locator('#password')
  const signin=page.locator('#signInBtn')
  const correctMessage=page.locator(":nth-child(1) > div > div.card-body > h4 > a")
  //const incorrectMessage=page.locator('.card-body a').first()
  const cardTitle= page.locator('.card-body a')
      //new page is opened
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
   const url= await page.url();
   console.log("title is "+url);
   console.log(await page.title())
   await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy') 

  await username.type('rahulshettyacademy1');
  await password.type('learning');
  await signin.click()
//         npx playwright test   
const expectedText=await page.locator("[style*='block']").textContent()
console.log(await expectedText);

  console.log(await page.locator("[style*='block']").textContent());


await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
//correct login   //   npx playwright test 
await username.fill('')
await username.type('rahulshettyacademy')
await password.fill('')
await password.type('learning')
await signin.click()
console.log(await correctMessage.textContent())
console.log(await cardTitle.first().textContent());
console.log(await cardTitle.nth(3).textContent());
console.log(await cardTitle.allTextContents())
const allTitle=await cardTitle.allTextContents();
console.log(allTitle);
//expect (allTitle).toContainText('iphone X', 'Samsung Note 8', 'Nokia Edge', 'Blackberry')

  });

  
test.only('page ui controls dropdown test', async ({page})=>{
    const username=page.locator('#username')
  const password=page.locator('#password')
  const dropdown =page.locator("[data-style='btn-info']")
const radio = page.locator("[class='checkmark']").last()
const popUpOK=page.locator('#okayBtn')
const checkBox=page.locator('#terms')
    page.goto('https://rahulshettyacademy.com/loginpagePractise/')
//  npx playwright test
   await dropdown.selectOption('consult')
  //await page.pause()
  await radio.click();
 await  expect (radio).toBeChecked();
 await popUpOK.click();
 await checkBox.click();
 await expect (checkBox).toBeChecked();
 await checkBox.uncheck();
 
 



    });


  