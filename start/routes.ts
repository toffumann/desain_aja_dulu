// start/routes.ts
import Route from '@adonisjs/core/services/router'
import KliensController from '#controllers/kliens_controller'

Route.get('/kliens', [KliensController, 'index'])
// 3. Route POST yang kita tuju
Route.post('/kliens', [KliensController, 'store'])
// 1. Route Root (Mengarahkan POST ke sini)
// Route.get('/', async () => {
//   return { hello: 'Welcome to the Kliens API' }
// })

// 2. Route GET yang berhasil