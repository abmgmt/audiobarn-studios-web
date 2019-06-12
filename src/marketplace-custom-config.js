/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'audio-engineer',
    label: 'Audio Engineer Included',
  },
];

export const categories = [
  { key: 'Band Studios', label: 'Band Studios' },
  { key: 'Solo Studios', label: 'Solo Studios' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 100,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
