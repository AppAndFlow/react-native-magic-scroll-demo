export function addOpacityToColor(color: string, opacity: number): string {
  if (color.includes('#')) {
    return addOpacityToColor(hexToRgb(color), opacity);
  }

  if (color.includes('rgba')) {
    const colorArray = color.split(',');
    const colorString = colorArray.slice(0, 3).join(',');
    return `${colorString},${opacity})`;
  }

  if (color.includes('rgb')) {
    let colorWithOpacity = color;
    colorWithOpacity = colorWithOpacity.replace(')', `,${opacity})`);
    colorWithOpacity = colorWithOpacity.replace('rgb', 'rgba');
    return colorWithOpacity;
  }

  return color;
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const res = {
    r: parseInt(result![1], 16),
    g: parseInt(result![2], 16),
    b: parseInt(result![3], 16),
  };
  return `rgb(${res.r}, ${res.g}, ${res.b})`;
}

/** Returns a random hex color */
export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
