import { exec, execSync } from "child_process";

/**
 *
 * @param {string[]} template
 * @param  {...any[]} args
 */
function defaultTemplateStr(template, ...args) {
  let str = "";
  template.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}

/**
 *
 * @param {string[]} template
 * @param  {...any[]} args
 * @returns {string}
 */
function main(template, ...args) {
  const command = defaultTemplateStr(template, ...args);
  return execSync(command, { encoding: "utf8" });
}

export const $ = Object.assign(main, {
  /**
   *
   * @param {string[]} template
   * @param  {...any[]} args
   * @returns {Promise<string>}
   */
  async(template, ...args) {
    const command = defaultTemplateStr(template, ...args);
    return new Promise((resolve, reject) =>
      exec(command, (error, stdout, stderr) => {
        if (error) {
          throw error;
        } else if (stderr) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      })
    );
  },
});
