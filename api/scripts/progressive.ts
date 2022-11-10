const playwright = require("playwright");

async function progressive(url: string, username: string, password: string) {
  const browser = await playwright.chromium.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForTimeout(3000);
  await page.fill("input[formcontrolname='userName']", username);
  await page.fill("input[formcontrolname='password']", password);
  await page.click("button[data-pgr-id='buttonSubmitLogin']");

  const loginError = await page.$$(".errorLogin");

  if (loginError) {
    await browser.close();
    return loginError;
  }

  await page.waitForTimeout(15000);
  await page.click("a[data-pgr-id='lnkProof']");
  await page.waitForTimeout(2000);
  await page.click("h4>[data-pgr-id='lblProofOption2']");
  await page.waitForTimeout(1000);
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("div>[data-pgr-id='btnSaveModal']"),
  ]);

  await download.saveAs("declaration-page.pdf");

  await page.waitForTimeout(1000);

  await browser.close();
}

export default progressive;
