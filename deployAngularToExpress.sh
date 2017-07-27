#!/bin/bash
echo "Copy files to public..."
rm -rf ./server/public
cp -r ./client/dist/ ./server/public
echo "Done!!"
