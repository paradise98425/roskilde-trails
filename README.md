# roskilde-trails

Project was created with the command: 
- ionic start roskilde-trails tabs --capacitor

- ionic serve

For mobile deployment

- ionic build

Next, create both the iOS and Android projects:

- ionic cap add ios
- ionic cap add android

Then, 
- ionic cap copy
- ionic cap sync

Now, To run on your mobile device 

- ionic capacitor run android -l -external

In order to run compodoc(once you run the command it will automatically watch for changes in code and update documentation):

- npm run compodoc

Wait for it to compile, then navigate to 

http://127.0.0.1:8080
