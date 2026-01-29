// Type declarations for global objects

interface InstagramEmbed {
  Embeds: {
    process: () => void;
  };
}

declare global {
  interface Window {
    instgrm?: InstagramEmbed;
  }
}

export {};
