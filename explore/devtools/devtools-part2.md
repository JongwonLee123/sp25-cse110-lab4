# Devtools-part2

1. The bug was that the result variable was not defined, so when we add 2 objects 1 and 2, we don't know if numbers or strings. Therefore, we assume '1' + '2'. String conversion takes over, so "12". 
2. I fix by making sure objects 1 and 2 are numbers, so the numeric conversion happens. 