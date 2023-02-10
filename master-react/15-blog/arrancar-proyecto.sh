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

gnome-terminal --tab --title "MONGO DB" -- bash -c "eval $mongo; exec bash -i"
gnome-terminal --tab --title "NODE JS" -- bash -c "eval $nodejs; exec bash -i"
gnome-terminal --tab --title "VITE" -- bash -c "eval $project; exec bash -i"
gnome-terminal --tab --title "POSTMAN GUI" -- bash -c "eval $postm; exec bash -i"
gnome-terminal --tab --title "COMPASS GUI" -- bash -c "eval $dbgui; exec bash -i"