#!/bin/bash

make=`make --directory=~/Documents/huffman-tree-ui/huffman_tree`

# echo $make 

res=`~/Documents/huffman-tree-ui/huffman_tree/a.out $1 $2`

echo $res
