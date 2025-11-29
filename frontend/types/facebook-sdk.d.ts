declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
      init: (options: any) => void;
    };
  }
}

export {};
