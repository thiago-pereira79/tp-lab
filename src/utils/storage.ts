/**
 * Safely accesses localStorage in browser environments, handling cases where 
 * third-party storage is disabled, blocked inside iframes, or unavailable.
 */
export const safeStorage = {
  getItem(key: string): string | null {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key);
      }
    } catch (e) {
      console.warn(`localStorage.getItem failed for key "${key}":`, e);
    }
    return null;
  },

  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value);
      }
    } catch (e) {
      console.warn(`localStorage.setItem failed for key "${key}":`, e);
    }
  },

  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(key);
      }
    } catch (e) {
      console.warn(`localStorage.removeItem failed for key "${key}":`, e);
    }
  }
};
