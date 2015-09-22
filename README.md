#Kevin Bielawski's page

### TODO
* React server rendering
  * Load entire page, not just Menu component
  * e.g. load entire markdown generated React components
* Flux-type architecture to manage state

### Present bugs
* See React server rendering (above)
  * Does not render full page on server

### Fixed bugs
* /api/latest and Latest.jsx

### Packages used
* `express` for routing and api
* `redis` as a data store
* `react` and `react-router`
* `gulp` and requisite `webpack` and `sass` modules for build process

### API (public)

###### /login
Used to authenticate a user based on username/password

###### /api/is-auth
Used on the client to determine if the user is authenticated
* Question: can this be removed after the initial page load is handled on the server?

###### /api/keys
All of the keys in the db

###### /api/all
Returns JSON for all objects in the db

###### /api/items
Returns JSON for all objects of type: item
* See also: `/api/items/:url`

###### /api/published
Only items marked as published

###### /api/latest
Most recently published item

### API (private)

###### /api/users
Contains user objects with passwords hashed via `bcrypt`

###### /api/sessions
Session data via `session` middleware
