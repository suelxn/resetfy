import { 
  app, 
  BrowserWindow, 
  ipcMain 
} from 'electron'

import path from 'node:path'

import { fileURLToPath } from 'node:url'

import Store from 'electron-store'



const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)



const store = new Store()



function createWindow() {


  const window = new BrowserWindow({


    width: 350,

    height: 250,


    resizable: false,


    frame: false,


    alwaysOnTop: true,


    transparent: true,


    x: store.get('x') as number | undefined,

    y: store.get('y') as number | undefined,



    webPreferences: {


      preload: path.join(

        __dirname,

        'preload.mjs'

      )


    }


  })



  window.loadURL(

    process.env.VITE_DEV_SERVER_URL!

  )



  // Salva posição da janela quando fechar

  window.on(

    'close',

    () => {


      const position = window.getPosition()



      store.set(

        'x',

        position[0]

      )



      store.set(

        'y',

        position[1]

      )


    }

  )


}




app.whenReady()

.then(() => {


  createWindow()



  app.on(

    'activate',

    () => {


      if(

        BrowserWindow.getAllWindows().length === 0

      ){

        createWindow()

      }


    }

  )


})





app.on(

  'window-all-closed',

  () => {


    if(process.platform !== 'darwin'){

      app.quit()

    }


  }

)





// Fechar aplicação pelo botão do React

ipcMain.on(

  'fechar',

  () => {


    const window =

    BrowserWindow.getFocusedWindow()



    if(window){

      window.close()

    }


  }

)





// Minimizar aplicação pelo botão do React

ipcMain.on(

  'minimizar',

  () => {


    const window =

    BrowserWindow.getFocusedWindow()



    if(window){

      window.minimize()

    }


  }

)