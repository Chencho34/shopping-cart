import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Provider } from 'react-redux'
import { rehydrateAuthState, store } from './app/store'
import './index.css'

rehydrateAuthState()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
