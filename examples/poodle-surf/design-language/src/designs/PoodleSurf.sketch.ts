/* 
 * This file was automatically generated by Diez and should not be edited. 
 */
import { Color, DropShadow, File, GradientStop, Image, LinearGradient, Point2D } from "@diez/prefabs";

const poodleSurfColors = {
    pink: Color.rgba(255, 63, 112, 1),
    orange: Color.rgba(255, 154, 58, 1),
    blue: Color.rgba(120, 207, 253, 1),
    white: Color.rgba(255, 255, 255, 1),
    whiteA40: Color.rgba(255, 255, 255, 0.4),
    black: Color.rgba(0, 0, 0, 1)
};

const poodleSurfGradients = {
    gradient: new LinearGradient({ stops: [GradientStop.make(0, Color.rgba(255, 63, 112, 1)), GradientStop.make(1, Color.rgba(255, 154, 58, 1))], start: Point2D.make(0.256905282720629, -0.052988346280542), end: Point2D.make(0.912005467655469, 1.039424344240629) })
};

const poodleSurfShadows = {
    cardStyleDropShadow: new DropShadow({ offset: Point2D.make(0, 2), radius: 30, color: Color.rgba(255, 63, 112, 0.7) })
};

export const poodleSurfSlicesFiles = {
    thermometer: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Thermometer.png" }),
    thermometer2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Thermometer@2x.png" }),
    thermometer3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Thermometer@3x.png" }),
    thermometer4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Thermometer@4x.png" }),
    gear: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Gear.png" }),
    gear2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Gear@2x.png" }),
    gear3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Gear@3x.png" }),
    gear4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Gear@4x.png" }),
    santaCruzBanner: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Banner.png" }),
    santaCruzBanner2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Banner@2x.png" }),
    santaCruzBanner3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Banner@3x.png" }),
    santaCruzBanner4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Banner@4x.png" }),
    santaCruzMap: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Map.png" }),
    santaCruzMap2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Map@2x.png" }),
    santaCruzMap3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Map@3x.png" }),
    santaCruzMap4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Santa Cruz Map@4x.png" }),
    mapPin: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Map Pin.png" }),
    mapPin2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Map Pin@2x.png" }),
    mapPin3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Map Pin@3x.png" }),
    mapPin4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Map Pin@4x.png" }),
    directionSouthWest: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South West.png" }),
    directionSouthWest2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South West@2x.png" }),
    directionSouthWest3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South West@3x.png" }),
    directionSouthWest4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South West@4x.png" }),
    directionSouth: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South.png" }),
    directionSouth2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South@2x.png" }),
    directionSouth3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South@3x.png" }),
    directionSouth4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - South@4x.png" }),
    directionNorthEast: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - North East.png" }),
    directionNorthEast2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - North East@2x.png" }),
    directionNorthEast3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - North East@3x.png" }),
    directionNorthEast4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Direction - North East@4x.png" }),
    icon: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Icon.png" }),
    icon2x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Icon@2x.png" }),
    icon3x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Icon@3x.png" }),
    icon4x: new File({ src: "assets/PoodleSurf.sketch.contents/slices/Icon@4x.png" })
};

export const poodleSurfSlices = {
    thermometer: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Thermometer.png", 29, 30),
    gear: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Gear.png", 29, 18),
    santaCruzBanner: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Santa Cruz Banner.png", 360, 147),
    santaCruzMap: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Santa Cruz Map.png", 100, 100),
    mapPin: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Map Pin.png", 9, 14),
    directionSouthWest: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Direction - South West.png", 78, 78),
    directionSouth: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Direction - South.png", 78, 78),
    directionNorthEast: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Direction - North East.png", 78, 78),
    icon: Image.responsive("assets/PoodleSurf.sketch.contents/slices/Icon.png", 29, 26)
};

export const poodleSurfTokens = {
    colors: poodleSurfColors,
    gradients: poodleSurfGradients,
    shadows: poodleSurfShadows
};