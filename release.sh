#!/bin/sh
cd ionic
cordova build --release android
cd platforms/android/build/outputs/apk
jarsigner -storepass password -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
zipalign -f 4 android-release-unsigned.apk feed.apk
mv -f feed.apk ../../../../../../dist/
