# Lotto Statistics

## Idea
This project tracks the frequency of drawn numbers in the Lotto lottery.

## How It Works

1. **Data Collection**:
   - The `losowanie.sh` script fetches data on the latest drawn numbers from [megalotto.pl](http://megalotto.pl) and saves it to a file named `wyniki.txt`.

2. **Data Processing**:
   - The `zmienne.sh` script reads each line of `wyniki.txt` into six variables. After processing, it deletes `wyniki.txt`.

3. **Database Update**:
   - The script then updates a JSON database at the beginning of the `script.js` file. A new entry is inserted between the first and second rows of `script.js`.

4. **Data Visualization**:
   - The website displays:
     - A table of the six most frequently drawn numbers.
     - A table of the seven most recent draws.
     - A table showing the frequency of each number (1-49) across all draws.
     - A donut chart created with Chart.js.

## Running the Script

To run the `zmienne.sh` script periodically, use the following cron job:

```bash
0 23 * * 2,4,6 /path >/dev/null 2>&1 
