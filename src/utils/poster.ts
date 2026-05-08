export async function exportElementAsImage(
  element: HTMLElement,
  fileName: string
): Promise<void> {
  const { default: html2canvas } = await import('html2canvas');

  const canvas = await html2canvas(element, {
    backgroundColor: '#fff8f0',
    scale: Math.min(window.devicePixelRatio || 1, 2),
    useCORS: true
  });

  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = fileName;
  link.click();
}
