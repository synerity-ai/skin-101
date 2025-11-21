import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { clinicInfo } from '@/content/config';

describe('Header', () => {
  it('renders navigation links and CTA', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /skin 101 home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^home$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book an appointment/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: clinicInfo.phoneDisplay })).toHaveAttribute('href', expect.stringContaining('tel:'));
  });
});


