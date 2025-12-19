
import asyncio
from playwright.async_api import async_playwright

async def verify_pages():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        try:
            # Verify Shop Page
            print("Verifying /shop...")
            await page.goto("http://localhost:5174/shop", timeout=30000)
            await page.wait_for_load_state("networkidle")

            shop_title = page.locator("h1:has-text('Shop All')")
            if await shop_title.is_visible():
                print("Confirmed: Shop page title visible.")
            else:
                 print("Error: Shop page title NOT visible.")

            # Verify Blog Page
            print("Verifying /blog...")
            await page.goto("http://localhost:5174/blog", timeout=30000)
            await page.wait_for_load_state("networkidle")

            blog_title = page.locator("h1:has-text('The Journal')")
            if await blog_title.is_visible():
                print("Confirmed: Blog page title visible.")
            else:
                 print("Error: Blog page title NOT visible.")

            # Verify Category Page (Demo data)
            print("Verifying /category/tuxedo...")
            await page.goto("http://localhost:5174/category/tuxedo", timeout=30000)
            await page.wait_for_load_state("networkidle")

            # Check for title
            cat_title = page.locator("h1:has-text('Tuxedos')")
            if await cat_title.is_visible():
                 print("Confirmed: Category 'Tuxedos' title visible.")
            else:
                 print("Error: Category 'Tuxedos' title NOT visible.")

            # Check for product
            product = page.locator("text='James Bond Tuxedo'")
            if await product.is_visible():
                 print("Confirmed: Demo product 'James Bond Tuxedo' is visible.")
            else:
                 print("Error: Demo product 'James Bond Tuxedo' NOT visible.")

            # Verify Home Slider
            print("Verifying Home Slider...")
            await page.goto("http://localhost:5174/", timeout=30000)

            # Check for multiple hero images in the DOM
            images = page.locator("img[alt^='Hero ']")
            count = await images.count()
            if count > 1:
                print(f"Confirmed: Found {count} hero images (Slider active).")
            else:
                print(f"Error: Found {count} hero images. Expected > 1.")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_pages())
