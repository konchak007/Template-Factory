

const withPreventingEvent = func => event => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  return func(event);
}

export default withPreventingEvent
