const {test, expect}= require ('@playwright/test');

test.only('page playwright assignment', async ({page})=>{
    
    const email=page.locator('#userEmail')
    const password=page.locator('#userPassword')
    const loginBtn=page.locator('#login')
    const cardTitle=page.locator('.card-body h5')
    await page.goto('https://rahulshettyacademy.com/client/')
    const url= await page.url();
   console.log("title is "+url);
   console.log(await page.title())
   //expect (url).to.equal('https://rahulshettyacademy.com/client/auth/login')

    await email.type('christophodibo@yahoo.com')   //  npx playwright test
    await password.type('Father70')
  //  await page.waitForNavigation()
    await loginBtn.click()
    
//note if not service based  used promise.all but if service based app used stright
    //console.log(await cardTitle.nth(2).textContent());
    await page.waitForLoadState('networkidle')
  const allTitle = await cardTitle.allTextContents()
   console.log(allTitle)



});