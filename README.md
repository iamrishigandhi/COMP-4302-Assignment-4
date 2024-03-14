# COMP 4302 Assignment 4

## Rishi Gandhi

## Student ID: 202014908

### 1. Surface Normals Setup (20%)

The code properly sets up surface normals for the objects by utilizing built-in geometries (such as `BoxGeometry`) provided by Three.js. These geometries automatically compute and assign surface normals to the vertices, ensuring correct lighting calculations.

### 2. Material Properties Setup (10%)

Different material properties are properly set up for the objects in the scene. For instance, a `MeshPhongMaterial` is used with a specified color for the cube object. This material type allows for specular highlights and smooth shading.

### 3. Two Distinctive Light Sources (20%)

Two distinctive light sources are set up at fixed locations: `DirectionalLights` (`lightTop`, `lightLeft`, `lightRight`). These lights illuminate the objects in the scene and can be toggled on and off independently using both keyboard keys and GUI buttons.

### 4. Ambient Light Source (10%)

An `AmbientLight` component is set up with adjustable intensity using a GUI slider. This ambient light source provides overall illumination to the scene and can be controlled from total darkness to intense brightness.

### 5. Moving Point Light Source (10%)

A moving `PointLight` source is implemented, represented by a 3D model (`pointLightMesh`). This light moves up and down the Y-axis, casting moving shadows on the ground plane. It can be toggled on and off independently.

### 6. Light Source Attached to Viewer (10%)

A spotlight attached to the viewer (similar to a headlamp) is not implemented in the provided code.

### 7. Shading Modes (10%)

The code properly implements three shading modes: flat, Gouraud, and Phong shading. These modes can be switched using keyboard mappings (`f`, `g`, `h`) or GUI buttons.

### 8. Interface for Light Sources Control (10%)

Basic interface elements are provided to control different light sources:

-   Keyboard keys (`t`, `l`, `r`, `a`, `p`) toggle visibility of various light sources.
-   GUI buttons allow for visual toggling of light sources and adjusting ambient light intensity.


# Total Grade Aimed For: 100%

Please read [Installation.md](https://github.com/iamrishigandhi/COMP-4302-Assignment-4/blob/main/Installation.md) for instructions if you have trouble running the code.

Here are the [References & Sources](https://github.com/iamrishigandhi/COMP-4302-Assignment-4/blob/main/References%20%26%20Sources.md)
