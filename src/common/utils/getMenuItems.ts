import fs from "fs";
import path from "path";
import type { TMenuItem } from "../components/ui/menus/types";

const filesPaths: string[] = [];

const getFilesRecursively = (directory = "src/pages") => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    let absolutePath = path.join(directory, file);

    if (fs.statSync(absolutePath).isDirectory()) {
      getFilesRecursively(absolutePath);
    } else {
      absolutePath = absolutePath.replace(/\\/g, "/");

      if (absolutePath.includes("src/pages/_app.tsx")) return;
      if (absolutePath.includes("src/pages/_document.tsx")) return;
      if (absolutePath.includes("src/pages/api")) return;
      if (absolutePath.includes("src/pages/404.tsx")) return;
      if (absolutePath.includes("src/pages/500.tsx")) return;
      if (absolutePath.includes("src/pages/index.tsx")) {
        absolutePath = absolutePath.replace("src/pages/index.tsx", "/");
      }

      filesPaths.push(absolutePath);
    }
  }
};

const prepareMenuObjects = (filesPaths: string[]): TMenuItem[] => {
  const menuObjects = filesPaths.map((filePath) => {
    const fileSplit = filePath.split("/");
    let fileName = fileSplit[fileSplit.length - 1] || "";
    let fileDirectory = fileSplit[fileSplit.length - 2] || "";
    let href = "";

    if (fileName.includes(".tsx")) {
      fileName = fileName?.replace(".tsx", "");
    }

    if (fileName === "index") {
      fileName = fileDirectory;
    }
    if (fileName === fileDirectory) {
      fileDirectory = "";
    }

    if (fileName === "") {
      fileName = "home";
    }

    href = `${fileDirectory}/${fileName}`;

    return {
      name: fileName,
      href: href,
    };
  });

  return menuObjects;
};

export default function getMenuItems(pagePath = "src/pages") {
  getFilesRecursively(pagePath);
  const menuObjects: TMenuItem[] = prepareMenuObjects(filesPaths);

  return menuObjects;
}
