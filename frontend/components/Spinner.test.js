import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Spinner from './Spinner'

// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  expect(true).toBe(true)
}) 

test('render Spinner without errors', () => {
  render(<Spinner />)
})

test('renders please wait when true is passed to on prop', () => {
  render(<Spinner on={true} />)
  const spinner = screen.queryByText('Please wait...')
  expect(spinner).toBeInTheDocument()
})

test('does not renders please wait when false is passed to on prop', () => {
  render(<Spinner on={false} />)
  const spinner = screen.queryByText('Please wait...')
  expect(spinner).not.toBeInTheDocument
})
