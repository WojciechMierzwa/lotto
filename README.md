# lotto

http://student.ans-elblag.pl/~20858/Strona/Lotto/index.html

EN

Idea: Keeping statistics of number of drawed numbers in lottery lotto

How does it work: 

Script losowanie.sh gets data of last drawed numbers from megalotto.pl and saves them to file wyniki.txt. Script zmienne.sh loads every row of file wyniki.txt to 6 variables, when it's done it deletes wyniki.txt. Next, it adds entry to database in JSON at beginning of file script.js. New entry is added between the first and second row of script.js. The site shows table of 6 numbers which were drawed the most, table of 7 last drawings, table of 1-49 number(those are all possible numbers to be drawed), which tells us how many times distinct number was drawed and donut chart implented with chart.js. 

To run bash script we use cronjob :
0 23 * * 2,4,6 /home/students/20858/public_html/Strona/Lotto/zmienne >/dev/null 2>&1


PL

Pomysł: Prowadzenie statystyki częstotliwości występowania danej liczby w losowaniu głównym lotto

Opis działania:

Skrypt losowanie.sh pobiera ze strony megalotto.pl wyniki ostatniego losowanie zapisując wyniki do pliku tekstowego wyniki.txt. Skrypt zmienne.sh wczytuje osobno wiersze w pliku txt do oddzielnych zmiennych, gdy kończy jest wczytywać usuwa plik wyniki.txt. Następnie dodaje pozycje do bazy danych w JSONie trzymanych na początku pliku w script.js.  Nowa pozycja jest wpisywana między pierwszy, a drugi wiersz w script.js. Strona wyświetla tabelę 6 najczęściej losowanych kulek, tabelę 7 ostatnich losowań, tabelę ile razy wypadadła, każda kula (bierze pod uwagę całą bazę, nie ostatnie 7), a także donut chart zaimplentowany biblioteką chart.js. Strona nie jest responsywna.

Aby skrypt działał cyklicznie używamy cronjob:
0 23 * * 2,4,6 /home/students/20858/public_html/Strona/Lotto/zmienne >/dev/null 2>&1

