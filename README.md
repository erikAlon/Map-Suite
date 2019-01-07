# Goals

- Render Map
- Display driver lan/ lon coordinates

  > **TranStar**  
  > Features needed from map API for this tool:
  >
  > - Add custom markers to map with coordinates
  >   - Geocoding API?

1.  - Create an event listener to make a marker for every new message
      - Log when this event occurs

    ***

2.  - Create javascript logic to parse through message

    ***

3.  - Create a new marker on map if message is "verified"
    - Delete a marker on map if message is "cleared"
    - Get incident freeway and exit street
    - Compare freeway name to database freeway names to reframe the string
    - Get lan/ lon coordinates of reframed freeway and exit street
    - Create a marker with coordinates
    - Get other information from message and apply to this marker
    - Render marker on map

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

# Stretch goals

- Overlay on Map

  > **Driver Proximity**

  > **Airplane Tracker**

  > **Crime Area**

  > **Seconds Hand**

- Driver chat and private message system
- Acquire Uber/ Lyft pick and drop off data and implement map routing

# Full stack

| Technology           | Purpose                          |
| -------------------- | -------------------------------- |
| GraphQL              | Retrieve exact data as needed    |
| Apollo               |                                  |
| Express              | Implement server and api's       |
| Node.js              | Write server logic in javascript |
| React                | Frontend                         |
| Redux                | State management to scale app    |
| MongoDB              | Holds pit stop locations         |
| _testing solution_   |                                  |
| _deploying solution_ |                                  |
| Stripe               | Payment processing               |

# App Features

| Cool Rank  | Tool Name        | Tool Feature                                                  | Graphical Presentation             |
| ---------- | ---------------- | ------------------------------------------------------------- | ---------------------------------- |
| \*\*\*\*\* | TranStar         | See TranStar alerts graphically in real time                  | Map                                |
| \*\*\*\*   | Driver Proximity | See other drivers proximity to your location anonymously      | Quantity based on preset proximity |
| \*\*\*     | Airplane Tracker | Airplane landing tracker                                      | Airplane button                    |
| \*\*\*     | Pit Stop         | Router to 24 hour facilities                                  | Map                                |
| \*\*       | Weather Radar    | Weather radar                                                 | Map                                |
| \*\*       | Traffic          | See traffic in real time                                      | Map                                |
| \*         | Crime Area       | See crime rate as a geofenced location                        | A color code                       |
| \*         | Seconds Hand     | Have seconds clock running in app or android phone background | Seconds display                    |
