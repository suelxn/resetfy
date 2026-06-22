import { contextBridge, ipcRenderer } from 'electron'


contextBridge.exposeInMainWorld(
  'electron',
  {

    fechar: () => {
      ipcRenderer.send('fechar')
    },


    minimizar: () => {
      ipcRenderer.send('minimizar')
    }

  }
)