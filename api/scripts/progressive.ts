const playwright = require("playwright");

async function progressive(url: string, username: string, password: string) {
  console.log(`username ${username}`);
  console.log(`password ${password}`);

  const browser = await playwright.chromium.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForTimeout(5000);
  await browser.close();
}

export default progressive;
