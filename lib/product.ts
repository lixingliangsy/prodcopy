export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "ProdCopy",
  slug: "prodcopy",
  tagline: "Turn a rough note into a scroll-stopping product description.",
  description: "Paste your product basics and get an SEO-friendly description with benefit-led bullets and an alternate tone you can A/B test.",
  toolTitle: "Write a product description",
  resultLabel: "Your description",
  ctaLabel: "Write copy",
  features: [
  "SEO-friendly description",
  "Benefit-led bullet points",
  "Alternate tone to test",
  "Key feature callouts"
],
  inputs: [
  {
    "key": "product_info",
    "label": "Product basics",
    "type": "textarea",
    "placeholder": "e.g. hand-poured soy candle, cedar + sage, 45h burn, $24"
  },
  {
    "key": "audience",
    "label": "Who buys it",
    "type": "input",
    "placeholder": "e.g. gift shoppers, eco-minded homeowners"
  },
  {
    "key": "tone",
    "label": "Tone",
    "type": "select",
    "options": [
      "Friendly",
      "Premium",
      "Straight"
    ]
  }
] as InputField[],
  systemPrompt: "You are a conversion copywriter for e-commerce. Given product basics, a target audience, and a tone, write an SEO-friendly product description with 3-4 benefit-led bullet points and one alternate-tone variant. Call out the key features naturally. Keep it scannable. In demo (mock) mode, return a realistic sample description following exactly this structure.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "5 descriptions/mo"
  },
  {
    "tier": "Pro",
    "price": "$19/mo",
    "desc": "Unlimited, save history"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const info = (inputs['product_info'] || '').trim()
  const aud = (inputs['audience'] || '').trim()
  const tone = inputs['tone'] || 'Friendly'
  if (!info) return 'Paste your product basics to get a description.'
  let out = 'PRODUCT DESCRIPTION (' + tone + (aud ? ', for ' + aud : '') + ')\n\n'
  out += 'Fill any room with the calm of a forest after rain. Our hand-poured soy candle blends cedar and sage for a 45-hour clean burn - no soot, no fuss.\n\n'
  out += 'BULLETS:\n'
  out += '  - 45-hour clean burn from 100% soy wax\n'
  out += '  - Cedar + sage for a grounding, unisex scent\n'
  out += '  ' + (aud || 'Made for people who want a small ritual, not a strong perfume.') + '\n\n'
  out += 'ALT TONE: A quiet, gift-ready upgrade for the eco-minded home.\n'
  out += '\n--- (Mock demo. Paste your product for tailored copy.)'
  return out
}
}
