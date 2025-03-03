import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CardAndDeck from './CardAndDeck'; 

describe('CardAndDeck Component', () => {
  const defaultProps = {
    room: 'Suite Deluxe',
    price: 150,
    checkIn: '2025-03-10',
    checkOut: '2025-03-15',
    image: 'test-image.jpg',
    onCancel: vi.fn()
  };

  it('renders basic room information', () => {
    render(<CardAndDeck {...defaultProps} />);
    
    expect(screen.getByText('Suite Deluxe')).toBeDefined();
    expect(screen.getByText('150 €')).toBeDefined();
   
    expect(screen.queryByText((content, element) => {
      return content.includes('2025-03-10') && element.textContent.includes('Check-in');
    })).toBeDefined();
  });


  it('handles cancel button click', () => {
    const mockCancel = vi.fn();
    render(<CardAndDeck {...defaultProps} onCancel={mockCancel} />);
    
    const cancelButton = screen.getByText('Cancelar');
    fireEvent.click(cancelButton);
    expect(mockCancel).toHaveBeenCalled();
  });


  it('renders room image', () => {
    render(<CardAndDeck {...defaultProps} />);
    
    const image = screen.getByAltText('Habitación Suite Deluxe');
    expect(image).toBeDefined();
    expect(image.getAttribute('src')).toBe('test-image.jpg');
  });
});