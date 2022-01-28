import { HeaderMain } from './components/header/HeaderMain'
import React from 'react'
import './App.css'
import { HomePage } from './components/HomePage'
import { RegLog } from './components/RegistrationLogin'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ChatComponent } from './components/ChatComponent'
import { ChatList } from './components/ChatList'

function App() {
	return (
		<div className='App'>
			<Router>
				<HeaderMain />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/chat/:id' element={<ChatList />} />
					<Route path='/signup' element={<RegLog />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
