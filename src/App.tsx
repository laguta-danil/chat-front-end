import { HeaderMain } from './components/header/HeaderMain'
import React from 'react'
import './App.css'
import { HomePage } from './components/HomePage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ChatList } from './components/ChatList'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'

function App() {
	return (
		<div className='App'>
			<Router>
				<HeaderMain />
				<Routes>
					<Route path='/' element={<ChatList />} />
					<Route path='/chat/:id' element={<HomePage />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/signin' element={<SignIn />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
