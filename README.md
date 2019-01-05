# Stack

| Technology | Purpose                       |
| ---------- | ----------------------------- |
| GraphQL    | Retrieve exact data as needed |
| Apollo     |
| Express    |
| Node.js    |
| React      |
| Redux      |
| MongoDB    |

# App Features

| Cool Rank  | Tool Name        | Tool Feature                                                  | Graphical Presentation             |
| ---------- | ---------------- | ------------------------------------------------------------- | ---------------------------------- |
| \*\*\*\*\* | TransStar        | See TranStar alerts graphically in real time                  | Map                                |
| \*\*\*\*   | Driver proximity | See other drivers proximity to your location anonymously      | Quantity based on preset proximity |
| \*\*\*     | Airplane tracker | Airplane landing tracker                                      | Airplane button                    |
| \*\*\*     | Pit stop         | Router to 24 hour facilities                                  | Map                                |
| \*\*       | Weather radar    | Weather radar                                                 | Map                                |
| \*\*       | Traffic          | See traffic in real time                                      | Map                                |
| \*         | Crime area       | See crime rate as a geofenced location                        | A color code                       |
| \*         | Second hand      | Have seconds clock running in app or android phone background | Seconds display                    |

## Notes

- 86 400 api calls (estimate messages per day)
- divide by 5 seconds, 17 280
- 2 types daily, 34 560
- 7 days, 241 920
- 52 weeks, 12 579 840

- 29.06 meters/second on highway (about 100 km/h)

- 1440 minutes/ day
- 288 intervals of 5 minutes/ day

> TranStar

- Uses sms client to forward texts with information payload. This information is formatted below.
- Max hourly messages I've seen were 16.. 16 texts \* 24 hours \* 30 days < 12, 000
- Sometimes two messages are sent under one payload.
- Email title is: Traffic Alert
- Email author is: TrafficAlert@HoustonTranStar.org
- Email signature links
- If text is within string length count, the footer contains an unsubscribe link

> Pit stop

Markers include:

- restaraunts
- gyms
- open gas stations
- convenience stores
- home
