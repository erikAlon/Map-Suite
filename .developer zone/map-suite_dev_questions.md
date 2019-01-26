# What have I visited?

- Medium
- Technology Documentation
- Stack Overflow
- https://facebook.github.io/react-native/showcase

# Notes

- 86 400 api calls (estimate messages per day)
- divide by 5 seconds, 17 280
- 2 types daily, 34 560
- 7 days, 241 920
- 52 weeks, 12 579 840

- 29.06 meters/second on highway (about 100 km/h)

- 1440 minutes/ day
- 288 intervals of 5 minutes/ day

- app will have < 10 screens or layouts to display its stuff

> TranStar

- Uses sms client to forward texts with information payload. This information is formatted below.
- Max hourly messages I've seen were 16.. 16 texts \* 24 hours \* 30 days < 12, 000
- Sometimes two messages are sent under one payload.
- Email title is: Traffic Alert
- Email author is: TrafficAlert@HoustonTranStar.org
- If text is within string length count, the footer contains an unsubscribe link
- Message content expires as soon as a "cleared" message is received
- Message format:

  | Order of strings | String before parcing                            | Caps? | Type of parcing               | Map details            |
  | ---------------- | ------------------------------------------------ | ----- | ----------------------------- | ---------------------- |
  | 1                | Freeway of interest                              | True  | End of caps                   | What freeway?          |
  | 2                | Direction of traffic                             | False | String content of next string | Which side of freeway? |
  | 3                | "At", "Before", or "After"                       | False | Start of caps                 | Location near exit?    |
  | 4                | Exit nearest to incident                         | True  | End of caps                   | What exit?             |
  | 5                | Type of alert, ex: "Accident", "Stall"           | False | Hyphen                        | Marker icon?           |
  | 6                | Either verified or cleared and time              | False | AM / PM                       | Persistance marker?    |
  | 7                | What lanes, shoulders, or ramps might be blocked | False | \n\n                          | Type of icon?          |

> Pit stop

Markers include:

- restaraunts
- gyms
- open gas stations
- convenience stores
- home

## How can I navigate the payload from TransStar into Spider-router?

- TranStar

Answer:

The Workflow:

1. Raw mail to json
2. Process json into map plotting details
3. Refresh map with details

The Gmail API states that it can read/ search messages

## How much data streaming might occur if one or many drivers are populated in real time?

- Driver proximiity

Answer:

## Where do I get airplane landing data from?

- Airplane tracker

Answer:

## Where do I get weather data from?

- Weather radar

Answer:

## Where can I populate these static facilities from in the most conveninent manner onto my database?

- Pit stop

Answer:

## How does the app calculate the top 5 destinations from the user?

- Pit stop

Answer:

## Which Google Maps API do I need to populate my map with real time traffic data?

- Traffic

Answer:

## What is the most convenient, unintrusive, intuitive way of bringing awareness to the driver of an area he entered?

- Crime area

Answer:

## What is the best position to display the seconds hand to help keep track of time?

- Seconds hand

Answer:

# Monetary gain from app

| Model                | Description                                           | Beneficiary     | Benefit                        |
| -------------------- | ----------------------------------------------------- | --------------- | ------------------------------ |
| Fremium Subscription | Linked to either Google/ Facebook/ E-mail account     | Developer       | 4.99                           |
| Referral             | Users refer other people to app for monetary gain     | Developer/ User | New Subscription / Free month  |
| NFC tipping          | Riders can tip drivers using NFC communication by app | User            | _Any specified amount by user_ |
