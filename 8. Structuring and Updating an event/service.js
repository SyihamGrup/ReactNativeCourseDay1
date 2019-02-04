import uuid from "uuid";
import { BaseUrl } from "./utils/constants";

export function getEvents() {
  return fetch(BaseUrl.events)
    .then(response => response.json())
    .then(events => events.map(e => ({ ...e, date: new Date(e.date) })));
}

export function saveEvent({ title, date }) {
  return fetch(BaseUrl.events, {
    method: "POST",
    body: JSON.stringify({
      title,
      date,
      id: uuid()
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error));
}

export function getEvent(id) {
  return fetch(BaseUrl.events + `/${id}`)
    .then(response => response.json())
    .catch(error => console.error("Error:", error));
}

export function updateEvent({ title, date, id }) {
  return fetch(BaseUrl.events + `/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      date,
      id
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .catch(error => console.error("Error:", error));
}

export function deleteEvent(id) {
  fetch(BaseUrl.events + `/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id
    }),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => res.json())
    .catch(error => console.log("Something happened:", error));
}
