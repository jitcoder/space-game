export const getFrameCoordinates = (index, width, height) => {
  const columns = width / 32;

  const column = index % columns;
  const row = Math.floor(index / columns);
  
  return { x: column * 32, y: row * 32 };
}