#!/bin/bash

make=`make --directory=./huffman_tree/`

res=`./huffman_tree/a.out $1 $2`

echo $res
