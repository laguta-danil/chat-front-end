import { HeaderMain } from './components/header/HeaderMain'
import React from 'react'
import './App.css'
import { HomePage } from './components/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'
import { ChatPage } from './components/ChatPage'

function App() {
	return (
		<div className='App'>
			<Router>
				<HeaderMain />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/chat/:id' element={<ChatPage />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/signin' element={<SignIn />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
