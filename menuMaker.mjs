import fs from "fs";
import path from "path";

const files = [];

const getFilesRecursively = (directory) => {
  const filesInDirectory = fs.readdirSync(directory);
  for (const file of filesInDirectory) {
    let absolute = path.join(directory, file);
    if (fs.statSync(absolute).isDirectory()) {
      getFilesRecursively(absolute);
    } else {
      absolute = absolute.replace(/\\/g, "/");

      if (absolute === "src/pages/_app.tsx") return;
      if (absolute === "src/pages/_document.tsx") return;
      if (absolute.includes("src/pages/api")) return;
      if (absolute.includes("src/pages/404.tsx")) return;
      if (absolute.includes("src/pages/500.tsx")) return;

      if (absolute.includes("src/pages/index.tsx")) {
        absolute = absolute.replace("src/pages/index.tsx", "/");
      }

      files.push(absolute);
    }
  }
};

const prepareMenuObjects = (files) => {
  const menuObjects = files.map((file) => {
    const fileSplit = file.split("/");
    let fileName = fileSplit[fileSplit.length - 1];
    let fileDirectory = fileSplit[fileSplit.length - 2];

    if (fileDirectory === "pages") {
      return null;
    }

    if (fileName === "") {
      fileName = "home";
    }

    if (fileName === "index.tsx") {
      fileName = fileDirectory;
    }

    if (fileName.includes(".tsx")) {
      fileName = fileName.replace(".tsx", "");
    }

    if (fileDirectory === fileName) {
      fileDirectory = "";
    }

    let href = `/${fileDirectory}/${fileName}`;

    if (href.includes("//")) {
      href = href.replace("//", "/");
    }

    if (href === "/home") {
      href = "/";
    }

    return {
      name: fileName,
      href: href,
    };
  });

  return menuObjects;
};

const menu = {
  get: (pagePath) => {
    getFilesRecursively(pagePath);
    const menuObjects = prepareMenuObjects(files);
    return menuObjects;
  },
};

export default menu;
