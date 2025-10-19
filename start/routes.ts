import router from '@adonisjs/core/services/router'

router.get('/', async ({ inertia }) => {
  return inertia.render('home')
})

router.get('/login', async ({ inertia }) => {
  return inertia.render('login')
})

router.post('/login', async ({ request, response }) => {
  const { email, password } = request.only(['email', 'password'])
  console.log(email, password) // sementara tampilkan di console dulu
  return response.redirect('/')
})
