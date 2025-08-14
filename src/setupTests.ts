import '@testing-library/jest-dom';

// Mock para SVG
const mockSvg = {
  className: '',
  style: {},
  setAttribute: jest.fn(),
  getAttribute: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

// Mock para createElement
document.createElement = jest.fn((tagName) => {
  if (tagName === 'svg') {
    return mockSvg as any;
  }
  return document.createElement(tagName);
});

// Mock para React
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  createElement: jest.fn((type, props, ...children) => {
    if (type === 'svg') {
      return mockSvg;
    }
    return jest.requireActual('react').createElement(type, props, ...children);
  }),
}));
