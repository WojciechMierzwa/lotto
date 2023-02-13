data=$(curl https://megalotto.pl)
values=$(echo "$data" | grep -o '<li><span>[0-9]\{1,2\}</span></li>' | grep -o '[0-9]\{1,2\}')
counter=0
for value in $values; do
  echo $value >> wyniki.txt
  counter=$((counter + 1))
  if [ $counter -eq 6 ]; then
    break
  fi
done
