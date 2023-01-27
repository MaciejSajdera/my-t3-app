declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      menu: TMenu[];
    }
  }
}
/* In order to make TypeScript treat your file as a module, just add one import statement to it. It can be anything. Even export {} will do. */
export {};
