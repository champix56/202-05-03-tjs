import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PDFMemeSVGViewer from './PDFMemeSVGViewer';

describe('<PDFMemeSVGViewer />', () => {
  test('it should mount', () => {
    render(<PDFMemeSVGViewer />);
    
    const pdfMemeSvgViewer = screen.getByTestId('PDFMemeSVGViewer');

    expect(pdfMemeSvgViewer).toBeInTheDocument();
  });
});