#!/bin/bash

rm base64/*.txt
rm -r base64
mkdir base64

# icons

base64 cocktails.png -o base64/cocktails.txt
base64 breakout.png -o base64/breakout.txt
base64 register.png -o base64/register.txt
base64 panel.png -o base64/panel.txt
base64 lunch.png -o base64/lunch.txt
base64 keynote.png -o base64/keynote.txt

# booklet art

base64 newyork.png -o base64/newyork.txt
base64 bluemix-logo.png -o base64/bluemix-logo.txt

ls -la *.txt
