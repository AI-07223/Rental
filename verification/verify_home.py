
import asyncio
from playwright.async_api import async_playwright

async def verify_home():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            # Navigate to the home page
            await page.goto("http://localhost:5174", timeout=60000)
            await page.wait_for_load_state("networkidle")

            # Take full page screenshot
            await page.screenshot(path="verification/home_full.png", full_page=True)
            print("Full page screenshot saved to verification/home_full.png")

            # Check for "For Her" section
            # Looking for the text "For Her" inside a section
            for_her_section = page.locator("text='For Her'").first
            if await for_her_section.is_visible():
                print("Confirmed: 'For Her' text is visible.")
            else:
                print("Error: 'For Her' text NOT visible.")

            # Check for "Man of Distinction" section
            # Looking for product cards in that section.
            # We can look for "The Classic Black Tuxedo" which we added.
            tuxedo = page.locator("text='The Classic Black Tuxedo'")
            if await tuxedo.is_visible():
                 print("Confirmed: 'The Classic Black Tuxedo' product is visible in Man of Distinction section.")
            else:
                 print("Error: 'The Classic Black Tuxedo' product NOT visible.")

            # Check for Blogs section
            blogs = page.locator("text='From the Journal'")
            if await blogs.is_visible():
                print("Confirmed: 'From the Journal' (Blogs) section is visible.")
            else:
                print("Error: 'From the Journal' section NOT visible.")

            # Check for Rental Curations
            curations = page.locator("text='Bridal Lehengas'").first # One of the curation titles
            if await curations.is_visible():
                print("Confirmed: Rental Curations section visible.")
            else:
                print("Error: Rental Curations section NOT visible.")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_home())
