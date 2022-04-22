export const ga_measurement_id = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID

// logs page views
export const pageview = (url) => {
  window.gtag('config', ga_measurement_id, {
    page_path: url,
  })
}

// logs specific events
export const event = ({ action, params }) => {
  window.gtag('event', action, params)
}
