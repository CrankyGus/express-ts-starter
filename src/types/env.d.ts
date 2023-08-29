import type { IEnv } from "../configs";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends IEnv {}
  }
}
