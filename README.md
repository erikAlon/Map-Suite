# Goals

0. ~~Set up Redux~~

---

1. ~~Render Map~~

---

2. ~~Display driver lan/ lon coordinates while moving~~

---

> **TranStar**  
> Features needed from map API for this tool:
>
> - Add custom markers to map with coordinates
>   - Get coordinates from google maps api
>   - Use predetermined array of freeway exits to drop marks here
>     - Search for intersection from array of intersections and populate map

3.  - Create an event listener to make a marker for every new message
      - ~~Log when this event occurs~~

    ***

4.  - ~Create javascript logic to parse through message~

    ***

5.  - Create a new marker on map if message is "verified"
    - Delete a marker on map if message is "cleared"
    - Get incident freeway and exit street
    - Compare freeway name to database freeway names to reframe the string
    - Get lan/ lon coordinates of reframed freeway and exit street
    - Create a marker with coordinates
    - Get other information from message and apply to this marker
    - Render marker on map

---

> **Hunter**
> Features needed from map API for this tool:
>
> - Add custom markers to map with coordinates

6.  - Search for assorted list of popular bars
    - Perform web scrape on googlemaps website
    - Extract percentage of "busy" labeled DOM elements in real time.
    - Simulate blob on map according to real time level of population

---

> **Pit Stop**  
> Features needed from map API for this tool:
>
> - Add custom markers to map with coordinates
>   - Geocoding API?
> - Routing
>   - Directions API?

> **Weather Radar**

> **Traffic**
> Features needed from map API for this tool:
>
> - Display levels of traffic
>   - ??? API?

# Stretch Goals

- Overlay on Map

- > **Driver Proximity**

- > **Airplane Tracker**

- > **Crime Area**

- > **Seconds Hand**

- Driver chat and private message system

- _Referral program_

# Full Stack

| Technology         | Purpose                             |
| ------------------ | ----------------------------------- |
| GraphQL            | Retrieve exact data as needed       |
| Apollo             | Integrate GraphQL to React apps     |
| Express            | Implement server and api's          |
| Node.js            | Write server logic in javascript    |
| React Native       | App development for ios and android |
| React              | Frontend                            |
| Redux              | State management to scale app       |
| MongoDB            | Holds pit stop locations            |
| _testing solution_ | Test data retreival, user input     |
| Firebase           | Server hosting                      |
| Stripe             | Payment processing                  |

# App Features

| Cool Rank | Tool Name        | Tool Feature                                                  | Graphical Presentation             |
| --------- | ---------------- | ------------------------------------------------------------- | ---------------------------------- |
| ★★★★★     | Hunter           | Track city population in real time                            | Map                                |
| ★★★★★     | TranStar         | See TranStar alerts graphically in real time                  | Map                                |
| ★★★★      | Driver Proximity | See other drivers proximity to your location anonymously      | Quantity based on preset proximity |
| ★★★       | Airplane Tracker | Airplane landing tracker                                      | Airplane button                    |
| ★★★       | Pit Stop         | Router to 24 hour facilities                                  | Map                                |
| ★★        | Weather Radar    | Weather radar                                                 | Map                                |
| ★★        | Traffic          | See traffic in real time                                      | Map                                |
| ★         | Crime Area       | See crime rate as a geofenced location                        | A color code                       |
| ★         | Seconds Hand     | Have seconds clock running in app or android phone background | Seconds display                    |
