#!/bin/bash

rm base64/*.txt
rm -r base64
mkdir base64

# icons

base64 cass.png -o base64/cass.txt
base64 chawla.png -o base64/chawla.txt
base64 karasick.png -o base64/karasick.txt
base64 loomis.png -o base64/loomis.txt
base64 mcgee.png -o base64/mcgee.txt
base64 pearson.png -o base64/pearson.txt
base64 sabbah.png -o base64/sabbah.txt
base64 robinson.png -o base64/robinson.txt
base64 reinitz.png -o base64/reinitz.txt
base64 rymer.png -o base64/rymer.txt
base64 vanderham.png -o base64/vanderham.txt
base64 sudlik.png -o base64/sudlik.txt

ls -la base64/*.txt
