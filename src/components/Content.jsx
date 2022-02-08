import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import './Content.css'

export default function Content() {
    return (
        <div className='content'>
            <Routes>
                <Route index element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
            </Routes>
        </div>
    )
}