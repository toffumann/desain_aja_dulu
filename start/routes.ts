
// start/routes.ts
import Route from '@adonisjs/core/services/router'
import KliensController from '#controllers/kliens_controller'

Route.group(() => {
  Route.resource('klien', KliensController).apiOnly().except()
}).prefix('/api')