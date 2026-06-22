"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld(
  "electron",
  {
    fechar: () => {
      electron.ipcRenderer.send("fechar");
    },
    minimizar: () => {
      electron.ipcRenderer.send("minimizar");
    }
  }
);
