export const OWNER_ID = import.meta.env.VITE_PORTFOLIO_OWNER_ID

if (import.meta.env.DEV) {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

  if (!uuidRegex.test(OWNER_ID)) {
    throw new Error('VITE_PORTFOLIO_OWNER_ID must be a valid UUID')
  }
}
