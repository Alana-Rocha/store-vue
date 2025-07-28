import { test, expect } from '@playwright/test'

test('recebe mensagem via WebSocket e exibe produto', async ({ page }) => {
  await page.goto('http://localhost:5173')

  const firstProduct = page.locator('[data-testid="product-message-0"]')

  await expect(firstProduct).toHaveText(/Produto \d+|Produto Teste/, { timeout: 15000 })
})
