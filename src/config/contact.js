/** E.164 digits only, no + (e.g. UK 07947744101 → 447947744101). Override via VITE_WHATSAPP_E164. */
export const WHATSAPP_E164 = (() => {
  const raw = import.meta.env.VITE_WHATSAPP_E164
  const digits = raw ? String(raw).replace(/\D/g, '') : ''
  return digits || '447947744101'
})()

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164}`

/** UK 07787071561 → https://t.me/+447787071561. Override via VITE_TELEGRAM_URL. */
const TELEGRAM_E164_DEFAULT = '447787071561'

export const TELEGRAM_URL = (() => {
  const fromUrl = import.meta.env.VITE_TELEGRAM_URL
  if (fromUrl) return fromUrl
  const raw = import.meta.env.VITE_TELEGRAM_E164
  const digits = raw ? String(raw).replace(/\D/g, '') : ''
  const e164 = digits || TELEGRAM_E164_DEFAULT
  return `https://t.me/+${e164}`
})()
