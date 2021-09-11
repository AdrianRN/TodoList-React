function TodosHeader() {
  // TODO improve this, this is just to test the design
  const date = new Date();
  const day = date.getDate();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][date.getDay()];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][date.getMonth()];



  // Use a different header image depending on the time of day
  const getHeaderImageClass = (hour) => {
    if (hour >= 0) {
      // Day time - 06:00 to 16:00
      return "bg-todo-header-fondo";
    } 
  };

  return (
    <header
      className={`${getHeaderImageClass(date.getHours())} bg-cover bg-center border-b-1 border-gray-300 px-4 py-6`}
      data-testid="todos-header-bg"
    >
      <h1 className="text-2xl text-white" data-testid="calendar-date">
        {`${weekDay}, ${day}`}
      </h1>
      <p className="pt-1 text-lg text-gray-100" data-testid="calendar-month">
        {month}
      </p>
    </header>
  );
}

export default TodosHeader;
