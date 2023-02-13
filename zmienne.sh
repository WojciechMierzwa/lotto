
./losowanie.sh

# Pobranie z pliku wierszy i wpisanie ich do zmiennych
filename="wyniki.txt"
for i in {1..6}; do
  read line
  eval line_$i="$line"
done < "$filename"

rm wyniki.txt

# Zapisanie pobranych danych do JSONA
filename='script.js'
new_line=''\''{"date": "'"$(date +"%d-%m-%Y")"'","numbers": ['"$line_1"', '"$line_2"', '"$line_3"', '"$line_4"', '"$lin$
# Pobieranie pierwszego wiersza
first_line=$(head -n 1 $filename)

# Pobieranie pozostałych wierszy
other_lines=$(tail -n +2 $filename)

# Utworzenie nowego pliku z dodanym wierszem
echo "$first_line" > $filename
echo "$new_line" >> $filename
echo "$other_lines" >> $filename
