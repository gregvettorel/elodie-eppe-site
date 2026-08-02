import { useEffect } from 'react'

// Updates the document title and the meta/canonical tags that already exist in
// index.html, per route. Keeps SPA navigation from leaving every page with the
// homepage's title and description in Google's index.
const SITE = 'https://eeppe.be'
const DEFAULT_DESCRIPTION =
  "Atelier d'architecture d'Elodie Eppe : une lecture simple et sensible des espaces, attentive aux usages, au réemploi des matériaux, à la gestion de l'eau et au confort."

function set(selector, attr, value) {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attr, value)
}

export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const desc = description || DEFAULT_DESCRIPTION
    const url = SITE + path

    document.title = title
    set('meta[name="description"]', 'content', desc)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', desc)
    set('meta[property="og:url"]', 'content', url)
    set('link[rel="canonical"]', 'href', url)
  }, [title, description, path])

  return null
}
