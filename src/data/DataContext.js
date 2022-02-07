import React, { createContext } from 'react'

export const data = {
    number: 10,
    text: 'Context API...'
}

const DataContext = createContext()
export default DataContext;