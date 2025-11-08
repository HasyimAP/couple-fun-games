// Default wheel configuration
export const DEFAULT_WHEEL_CONFIG = [
  { value: 10000, weight: 10 },
  { value: 20000, weight: 5 },
  { value: 25000, weight: 4 },
  { value: 50000, weight: 2 },
  { value: 100000, weight: 1 },
];

// Helper function to select weighted random value
export function getWeightedRandomValue(config) {
  const totalWeight = config.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const item of config) {
    random -= item.weight;
    if (random <= 0) {
      return item.value;
    }
  }
  
  // Fallback to last item (should not happen)
  return config[config.length - 1].value;
}
