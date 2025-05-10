declare module "vite-plugin-eslint" {
  import { Plugin } from "vite";
  interface EslintPluginOptions {
    // Define known options based on the plugin's documentation
    // For example:
    cache?: boolean;
    fix?: boolean;
    include?: string | string[];
    exclude?: string | string[];
    eslintPath?: string;
    formatter?: string | object; // Adjust type as per actual plugin options
    lintOnStart?: boolean;
    emitWarning?: boolean;
    emitError?: boolean;
    failOnWarning?: boolean;
    failOnError?: boolean;
    // Add other options as needed
    // [key: string]: any; // For any other options not explicitly defined
  }
  function eslintPlugin(options?: EslintPluginOptions): Plugin;
  export default eslintPlugin;
}
