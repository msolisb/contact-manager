import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import AddContact from './components/contacts/AddContact/AddContact'
import ContactList from './components/contacts/ContactList/ContactList'
import EditContatc from './components/contacts/EditContact/EditContatc'
import ViewContact from './components/contacts/ViewContact/ViewContact'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path='/' element={<Navigate to={'/contacts/list'} />} />
        <Route path='/contacts/list' element={<ContactList />} />
        <Route path='/contacts/add' element={<AddContact />} />
        <Route path='/contacts/view/:contactId' element={<ViewContact />} />
        <Route path='/contacts/edit/:contactId' element={<EditContatc />} />
      </Routes>
    </div>
  )
}

export default App
