// Auto-build gallery image list from `website/src/assets`.
// Supports filenames like:
// - `look<number>.jpg`
// - `look<number>-<style-name>.jpg` (or .jpeg/.png/etc)
// Example: `look12-aso-ebi.jpg` -> title "Aso Ebi"
//
// Important: we load ALL `look*` files and then parse the number/label from the name.
const modules = import.meta.glob('../assets/look*', { eager: true });

const formatLabel = (raw) => {
  const cleaned = String(raw)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) return '';

  return cleaned
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const parseLook = (fileName) => {
  // Supports:
  // - look12.jpg
  // - look12-aso-ebi.jpg
  // - look12_aso_ebi.jpg
  const match = String(fileName).match(/^look(\d+)(?:[-_ ](.+))?\.(\w+)$/i);
  if (!match) return null;

  const lookNumber = Number.parseInt(match[1], 10);
  const labelPart = match[2] ? formatLabel(match[2]) : '';

  return {
    lookNumber,
    title: labelPart || `Look ${lookNumber}`,
  };
};

const galleryImages = Object.entries(modules)
  .map(([path, mod]) => {
    const fileName = String(path).split(/[/\\]/).pop() || '';
    const parsed = parseLook(fileName);
    if (!parsed) return null;

    return {
      src: mod.default,
      title: parsed.title,
      lookNumber: parsed.lookNumber,
      // Keep category empty for now; UI still shows the title.
      category: undefined,
    };
  })
  .filter(Boolean)
  .sort((a, b) => b.lookNumber - a.lookNumber);

export { galleryImages };