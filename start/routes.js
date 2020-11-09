'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Halo Dunia di JSON' }
})

Route.group(() => {
	// patient
	Route.get('patients', 'PatientController.index')
	Route.get('patient/:id', 'PatientController.show')
	Route.post('patient', 'PatientController.store')

	// subjective
	Route.get('subjectives', 'SubjectiveController.index')
	Route.get('subjective', 'SubjectiveController.show')
	Route.post('subjective', 'SubjectiveController.store')

	// objective

	// assessment

	// plan

	// receipt
}).prefix('api/v1')
