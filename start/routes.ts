import router from '@adonisjs/core/services/router'
import KliensController from '#controllers/kliens_controller'

router.get('/', async ({ inertia }) => {
  return inertia.render('home')
})


router.group(() => {
  router.resource('klien', KliensController).apiOnly()
}).prefix('/api')

// Route untuk halaman lain
router.get('/consultation', async ({ inertia }) => {
  return inertia.render('consultation')
})

router.get('/services', async ({ inertia }) => {
  return inertia.render('services')
})

router.get('/contact', async ({ inertia }) => {
  return inertia.render('contact')
})

router.get('/portfolio', async ({ inertia }) => {
  return inertia.render('portfolio')
})
router.get('/login', async ({ inertia }) => {
  return inertia.render('login')
})