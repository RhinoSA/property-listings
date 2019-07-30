function time() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "Good morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "Good afternoon";
  } else {
    timeOfDay = "Good evening";
  }
  return timeOfDay;
}

function formatDate(date) {
  const datetwo = new Date();
  return datetwo.toLocaleDateString();
}

{
  time();
}

{
  formatDate(this.props.datetwo);
}
