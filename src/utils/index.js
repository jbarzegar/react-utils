export const renderComponent = ({ children, render = null }, data = {}) =>
  !render ? children(data) : render(data);
