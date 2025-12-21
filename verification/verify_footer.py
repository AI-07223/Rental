
import asyncio
from playwright.async_api import async_playwright

async def verify_footer():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            print("Verifying Footer...")
            await page.goto("http://localhost:5174", timeout=30000)
            await page.wait_for_load_state("networkidle")

            # Check for Mili's Couture brand text in footer (it's an h3)
            # We look for the text from config: "Mili's Couture" (case insensitive usually in playwright locator text=, but exact here)
            # The config says name: "Mili's Couture", Navbar renders "MILI'S COUTURE". Footer renders uppercase {siteDetails.name}.
            footer_brand = page.locator("footer h3:has-text(\"Mili's Couture\")")
            # Note: CSS uppercase transform doesn't change the DOM text content, so "Mili's Couture" should be found.

            if await footer_brand.count() > 0:
                print("Confirmed: Footer displays 'Mili's Couture' branding.")
            else:
                 # Fallback check if it's already uppercase in data? No config has it mixed case.
                 print("Error: Footer branding 'Mili's Couture' NOT found.")
                 # Debug: print footer text
                 footer_text = await page.locator("footer").text_content()
                 print(f"Footer Text Content: {footer_text[:200]}...")

            # Check for absence of DRESSZILLA
            dresszilla = page.locator("text='DRESSZILLA'")
            if await dresszilla.count() == 0:
                print("Confirmed: 'DRESSZILLA' text is NOT present on the page (checked visible text).")
            else:
                 print("Error: Found 'DRESSZILLA' text on page!")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_footer())
