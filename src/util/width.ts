export function width(width: string | number, containerWidth?: number): number {
  if (typeof width == 'string') {
    if (width.indexOf('%') > -1) {
      return (containerWidth / 100) * parseInt(width, 10);
    } else {
      return parseInt(width, 10);
    }
  }

  return width;
}

export function px(width: number): string {
  if (!width) return '';
  return `${Math.floor(width)}px`;
}

/**
 * Accepts a ShadowTable and tries to find the clientWidth
 * that is already rendered on the web browser
 *
 * @param shadowTable
 * @param columnIndex
 */
export function getWidth(shadowTable: Element, columnIndex): number {
  if (!shadowTable) {
    return null;
  }

  const tds = shadowTable.querySelectorAll('tr:first-child > td');

  if (tds && tds[columnIndex]) {
    return tds[columnIndex].clientWidth;
  }

  return null;
}
