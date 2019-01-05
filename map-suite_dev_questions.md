# Developer Questions

## Transtar incident alerts are in the following format:

- TranStar

Answer:

| Order of parced strings | Type of parcing technique                | String                                           | Caps? |
| ----------------------- | ---------------------------------------- | ------------------------------------------------ | ----- |
| 1                       | Caps to proper sentence format           | Freeway of interest                              | True  |
| 2                       | Proper sentence format to capitalization | Direction of traffic                             | False |
| 3                       | Caps to proper sentense format           | Closest or next exit                             | True  |
| 4                       | Hyphen                                   | "Accident"                                       | False |
| 5                       | AM or PM                                 | Either verified of cleared and time              | False |
| 6                       | End of message                           | What lanes, shoulders, or ramps might be blocked | False |
| 7                       | Start of new message                     | Two \n                                           | False |

## How can I navigate the payload from TransStar into Spider-router?

- TranStar

Answer:

### Workflow

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
