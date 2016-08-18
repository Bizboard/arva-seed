/**
 * Created by Manuel on 18/08/16.
 */

var splashiconGenerator = require("splashicon-generator");

/* Android specific icon options */
var androidOptions = {
    ICON_FILE: 'res/android/icon.png',
    SPLASH_FILE: 'res/android/splash.png',
    ICON_PLATFORMS: [{
        name: 'android',
        iconsPath: 'res/icons/android/',
        isAdded: true,
        icons: [
            { name:'icon-36-ldpi.png', size: 36, density:'ldpi' },
            { name:'icon-48-mdpi.png', size: 48, density:'mdpi' },
            { name:'icon-72-hdpi.png', size: 72, density:'hdpi' },
            { name:'icon-96-xhdpi.png', size: 96, density:'xhdpi' },
            { name:'icon-144-xxhdpi.png', size: 144, density:'xxhdpi' },
            { name:'icon-192-xxxhdpi.png', size: 192, density:'xxxhdpi' },
        ]
    }],
    SPLASH_PLATFORMS: [{
        name: 'android',
        isAdded: true,
        splashPath: 'res/screens/android/',
        splash: [
            { name:"screen-ldpi-portrait.png", width: 320, height: 426, density:"port-ldpi" }, // 200x320
            { name:"screen-ldpi-landscape.png", width: 426, height: 320, density:"land-ldpi" }, // 320x200
            { name:"screen-hdpi-portrait.png", width: 480, height: 640, density:"port-hdpi" }, // 320x480
            { name:"screen-hdpi-landscape.png", width: 640, height: 480, density:"land-hdpi" }, // 480x320
            { name:"screen-mdpi-portrait.png", width: 320, height: 470, density:"port-mdpi" }, // 480x800
            { name:"screen-mdpi-landscape.png", width: 470, height: 320, density:"land-mdpi" }, // 800x480
            { name:"screen-xhdpi-portrait.png", width: 720, height: 960, density:"port-xhdpi" }, // 720x1280
            { name:"screen-xhdpi-landscape.png", width: 960, height: 720, density:"land-xhdpi" }, // 1280x720
            { name:"screen-xxhdpi-portrait.png", width: 960, height: 1600, density:"port-xxhdpi" }, // 960x1600
            { name:"screen-xxhdpi-landscape.png", width: 1600, height: 960, density:"land-xxhdpi" }, // 1600x960
            { name:"screen-xxxhdpi-portrait.png", width: 1280, height: 1920, density:"port-xxhdpi" }, // 1280x1920
            { name:"screen-xxxhdpi-landscape.png", width: 1920, height: 1280, density:"land-xxhdpi" } // 1920x1280
        ]
    }]
};

/* iOS specific icon options */
var iosOptions = {
    ICON_FILE: 'res/ios/icon.png',
    SPLASH_FILE: 'res/ios/splash.png',
    ICON_PLATFORMS: [{
        name: 'ios',
        isAdded: true,
        iconsPath: 'res/icons/ios/',
        icons: [
            // Default icon (avoid Apple submit error ITMS-90032)
            { name: "../icon.png", size: 57 },
            // iOS 8.0+, iPhone 6 Plus
            { name:'icon-60-3x.png', size:180 },
            // iOS 7.0+, iPhone / iPod Touch  -->
            { name:'icon-60.png', size:60 },
            { name:'icon-60-2x.png', size:120 },
            // iPad -->
            { name:'icon-76.png', size:76 },
            { name:'icon-76-2x.png', size:152 },
            { name:'icon-76-3x.png', size:228 },
            // iOS 6.1, Spotlight Icon -->
            { name:'icon-40.png', size:40 },
            { name:'icon-40-2x.png', size:80 },
            { name:'icon-40-3x.png', size:120 },
            // iPhone / iPod Touch -->
            { name:'icon-57.png', size:57 },
            { name:'icon-57-2x.png', size:114 },
            { name:'icon-57-3x.png', size:171 },
            // iPad -->
            { name:'icon-72.png', size:72 },
            { name:'icon-72-2x.png', size:144 },
            { name:'icon-72-3x.png', size:216 },
            // iPhone Spotlight and Settings Icon -->
            { name:'icon-small.png', size:29 },
            { name:'icon-small-2x.png', size:58 },
            { name:'icon-small-3x.png', size:87 },
            // iPad Spotlight and Settings Icon -->
            { name:'icon-50.png', size:50 },
            { name:'icon-50-2x.png', size:100 },
            { name:'icon-50-3x.png', size:150 },
            // Other sizes -->
            { name:'icon-48.png', size:48 },
            { name:'icon-48-2x.png', size:96 },
            { name:'icon-58.png', size:58 },
            { name:'icon-58-2x.png', size:116 },
            { name:'icon-58-3x.png', size:174 },
            { name:'icon-64.png', size:64 },
            { name:'icon-64-2x.png', size:128 },
            { name:'icon-64-3x.png', size:192 },
            { name:'icon-83.5.png', size:83.5 },
            { name:'icon-83.5-2x.png', size:167 },
            { name:'icon-320.png', size:320 },
        ]
    }],
    SPLASH_PLATFORMS: [{
        name: 'ios',
        isAdded: true,
        splashPath: 'res/screens/ios/',
        splash: [
            { name:"screen-iphone-portrait.png", width:320, height:480 },           // iPhone
            { name:"screen-iphone-portrait-2x.png", width:640, height:960 },        // iPhone Retina
            { name:"screen-ipad-portrait.png", width:768, height:1024 },            // iPad
            { name:"screen-ipad-portrait-2x.png", width:1536, height:2048 },        // iPad Retina
            { name:"screen-ipad-landscape.png", width:1024, height:768 },           // iPad
            { name:"screen-ipad-landscape-2x.png", width:2048, height:1536 },       // iPad Retina
            { name:"screen-iphone-568h-2x.png", width:640, height:1136 },           // iPhone 5 Retina
            { name:"screen-iphone-portrait-667h.png", width:750, height:1334 },     // iPhone 6
            { name:"screen-iphone-portrait-736h.png", width:1242, height:2208 },    // iPhone 6 Plus
            { name:"screen-iphone-landscape-736h.png", width:2208, height:1242 },   // iPhone 6 Plus
        ]
    }]
};

splashiconGenerator.generate(androidOptions).then(function(){splashiconGenerator.generate(iosOptions).then(function(){console.log('Generating icons done')})});
