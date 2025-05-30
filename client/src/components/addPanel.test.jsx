import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AddPlanModal from './addPlan'
import { vi } from 'vitest'

describe('AddPlanModal', () => {
  const mockOnSubmit = vi.fn()
  const mockOnClose = vi.fn()

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onSubmit: mockOnSubmit,
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  test('does not render when isOpen is false', () => {
    render(<AddPlanModal {...defaultProps} isOpen={false} />)
    expect(screen.queryByText(/Add New Plan/i)).not.toBeInTheDocument()
  })

  test('renders all input fields when isOpen is true', () => {
    render(<AddPlanModal {...defaultProps} />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Price')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Interval (e.g., Month)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Features (comma separated)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('SVG Color (e.g., #FBBA10)')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Link (e.g., https://calendly.com)')).toBeInTheDocument()
  })

  test('shows validation errors if submitted with empty fields', async () => {
    render(<AddPlanModal {...defaultProps} />)

    fireEvent.click(screen.getByRole('button', { name: /Add Plan/i }))

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Price is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Interval is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Description is required/i)).toBeInTheDocument()
      expect(screen.getByText(/At least one feature is required/i)).toBeInTheDocument()
      expect(screen.getByText(/SVG color is required/i)).toBeInTheDocument()
      expect(screen.getByText(/Link is required/i)).toBeInTheDocument()
    })
  })

  test('calls onSubmit and onClose with valid values', async () => {
    render(<AddPlanModal {...defaultProps} />)

    fireEvent.change(screen.getByPlaceholderText('Name'), { target: { value: 'Premium Plan' } })
    fireEvent.change(screen.getByPlaceholderText('Price'), { target: { value: '29.99' } })
    fireEvent.change(screen.getByPlaceholderText('Interval (e.g., Month)'), { target: { value: 'Month' } })
    fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Full access to everything' } })
    fireEvent.change(screen.getByPlaceholderText('Features (comma separated)'), { target: { value: 'Chat,Analytics' } })
    fireEvent.change(screen.getByPlaceholderText('SVG Color (e.g., #FBBA10)'), { target: { value: '#FFAA00' } })
    fireEvent.change(screen.getByPlaceholderText('Link (e.g., https://calendly.com)'), { target: { value: 'https://calendly.com/premium' } })

    fireEvent.click(screen.getByRole('button', { name: /Add Plan/i }))

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: 'Premium Plan',
        price: '29.99',
        interval: 'Month',
        description: 'Full access to everything',
        features: 'Chat,Analytics',
        svgColor: '#FFAA00',
        link: 'https://calendly.com/premium',
      })
      expect(mockOnClose).toHaveBeenCalled()
    })
  })
})