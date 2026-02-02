declare module 'figma:asset/*' {
  const src: string;
  export default src;
}

// Match imports that include an inline version like "package@1.2.3" used accidentally
declare module '*@*' {
  const value: any;
  export default value;
}

// Allow importing image files without type errors
declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
