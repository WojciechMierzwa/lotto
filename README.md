# lotto

Strona prowadzi statystyke losowan lotto. Skrypt bashowy losowanie.sh pobiera ze strony megalotto.pl wyniki ostatniego losowania lotto zapisując to do pliku wyniki.txt. Następnie skrypt zmienne.sh wczytuje wiersze jako zmienne i następnie wpisuje je do bazy danych trzymanej w JSONie- konkretnie wpisuje wiersz pomiędzy pierwszy wiersz, a drugi wiersz dodając najnowszą pozycję. Strona wyświetla tabelę 6 najczęściej losowanych kulek ( zwracanie indeksów nie jest dokońca poprawne pomija ostatni numer, na razie tak to zostawiam ). Także wyświetla 7 ostatnich losowań (w wypadku większej ilości strona, by się rozjeżdzała). Za pomocą chart.js pokazany jest donut chart, który hover niedziała satysfakcjonująco. 
http://student.ans-elblag.pl/~20858/Strona/Lotto/index.html
