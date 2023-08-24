import { app } from './app'
import {initialConfiguration} from './config'

app.listen(initialConfiguration.serverPort,()=>{
    console.log('Runnin Auth Server on http://localhost:'+ initialConfiguration.serverPort)
})