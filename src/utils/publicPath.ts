/**
 * Utility function to get the correct path for public assets
 * This handles different environments (development, production, etc.)
 */
export function getPublicPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
} 