export const safeStorage = {
  getItem(key) {
    if (typeof window === 'undefined') return null;
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.error('localStorage getItem failed', error);
      return null;
    }
  },
  setItem(key, value) {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error('localStorage setItem failed', error);
    }
  },
};
