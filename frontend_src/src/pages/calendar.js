
import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
class Cal extends Component {
  
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "hour").toDate(),
        title: "Example: the rock is scheduled.",
      },
    ],
    showAddEventForm: false,
    newEventTitle: '',
  };

  toggleAddEventForm = () => {
    this.setState((prevState) => ({
      showAddEventForm: !prevState.showAddEventForm,
    }));
  };

  handleInputChange = (event) => {
    this.setState({ newEventTitle: event.target.value });
  };

  handleAddEvent = () => {
  const { newEventTitle } = this.state;

  if (newEventTitle.trim() !== '') {
    const newEvent = {
      id: this.state.events.length + 1, // Generate a unique ID
      start: moment().toDate(),
      end: moment().add(1, "hour").toDate(),
      title: newEventTitle,
    };

    this.setState((prevState) => ({
      events: [...prevState.events, newEvent],
      showAddEventForm: false,
      newEventTitle: '',
      selectedEvent: null, // Reset selectedEvent after adding a new event
    }));
  }
};
onEventResize = (data) => {
  const { start, end, event: resizedEvent } = data;
  
  const updatedEvents = this.state.events.map(event => {
    if (event.id === resizedEvent.id) {
      return {
        ...event,
        start,
        end,
      };
    }
    return event;
  });

  this.setState({ events: updatedEvents });
};
componentDidMount() {
  const savedEvents = localStorage.getItem("calendarEvents");
  if (savedEvents) {
    this.setState({ events: JSON.parse(savedEvents) });
  }
}

componentDidUpdate(prevProps, prevState) {
  const { events } = this.state;

  // Check if events in state have changed before updating local storage
  if (prevState.events !== events) {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }
}


  onEventDrop = (data) => {
  const { start, end, event: droppedEvent } = data;

  const updatedEvents = this.state.events.map((event) => {
    if (event === droppedEvent) {
      return {
        ...event,
        start,
        end,
      };
    }
    return event;
  });

  this.setState({
    events: updatedEvents,
  });
};


handleDeleteAllEvents = () => {
  this.setState({ events: [] });
};
handleEventSelection = (event) => {
  this.setState({ selectedEvent: event });
};
handleDeleteEvent = () => {
  const { selectedEvent, events } = this.state;

  if (selectedEvent) {
    const updatedEvents = events.filter(event => event.id !== selectedEvent.id);
    this.setState({ events: updatedEvents, selectedEvent: null });
  }
};

render() {
  const { showAddEventForm, newEventTitle } = this.state;

  return (
    <div className="Cal">
      <button onClick={this.toggleAddEventForm} className="add-event-button">
        Add Event
      </button>
      <button onClick={this.handleDeleteEvent} className="delete-event-button">
  Delete Selected Event
</button>

      {showAddEventForm && (
        <div className="add-event-form">
          <input
            type="text"
            placeholder="Enter event title"
            value={newEventTitle}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddEvent}>Save</button>
        </div>
        
      )}

      <DnDCalendar
        
        defaultDate={moment().toDate()}
        defaultView="month"
        events={this.state.events}
        localizer={localizer}
        onEventDrop={this.onEventDrop}
        onEventResize={this.onEventResize}
        resizable
        style={{ height: "100vh" }}
        components={{ event: this.renderEvent }}
        onSelectEvent={this.handleEventSelection}
      />
    </div>
  );
}
}

export default Cal;