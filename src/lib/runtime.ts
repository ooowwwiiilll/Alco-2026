// A public build always uses real identity and the remote store.
export const isLocalWorkspace =
  import.meta.env.DEV &&
  import.meta.env.VITE_DATA_MODE !== 'firebase' &&
  ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);

export const dataMode = isLocalWorkspace ? 'local' : 'firebase';
