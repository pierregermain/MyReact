#!/bin/bash
echo 'Script para abrir varias pestañas en Gnome Terminal con el MERN Stack'
echo 'M = MongoDB — document database'
echo 'E = Express(.js) — Node.js web framework'
echo 'R = React(.js) — a client-side JavaScript framework'
echo 'N = Node(.js) — the premier JavaScript web server'

mongo="sudo systemctl start mongod"
nodejs="cd /home/pierre/webapps/MyReact/api-rest-node && npm run start"
project="cd ~/webapps/MyReact/master-react/15-blog && npm run dev"
postm="/usr/bin/flatpak run --branch=stable --arch=x86_64 --command=Postman --file-forwarding com.getpostman.Postman @@u %U @@"
dbgui="mongodb-compass %U"

gnome-terminal --tab -e "bash -c 'printf \"\033]0;MONGO\007\"; eval \"$mongo\"'" \
               --tab -e "bash -c 'printf \"\033]0;NODE\007\"; eval \"$nodejs\"'" \
               --tab -e "bash -c 'printf \"\033]0;PROJECT\007\"; eval \"$project\"'" \
               --tab -e "bash -c 'printf \"\033]0;POSTMAN\007\"; eval \"$postm\"'" \
               --tab -e "bash -c 'printf \"\033]0;DBGUI\007\"; eval \"$dbgui\"'" \
