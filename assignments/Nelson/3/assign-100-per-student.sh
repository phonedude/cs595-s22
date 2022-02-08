#!/bin/csh -x
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > SDHAN005@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > EVOGT001@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > JMURP030@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > RSLIC001@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > EABIO001@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > KBANK004@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > ISANK002@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > JSIDL001@ODU.EDU
tail -500 top500Domains.csv | cut -d "," -f 2 | ./random-100.pl | sort -u > VVOSC001@ODU.EDU

