---
subid: wave-optics
title: Wave optics
topics: eto
---

<div class="container">
    <div class="text">
        <p> 
            The diffraction of light can be understood with Huygen’s principle: 
        </p>
    </div>
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
            <img src="images/ETO/Wave Optics Interference.png" class="pop-image" 
            style="max-width: 100%; width: 30vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
            Figure 1: Magnifying Glass</div><div class="image-tooltip-desc">
            You saw this something like this when you clicked onto this topic</div></span>
        </div>
    </div>
</div>


        
> **HUYGEN'S PRINCIPLE** Every point on a wavefront acts as a source of spherical wavelets 

We cannot resolve rays which are less than O... apart 


### Thin film interference 

<div class="container">
    <div class="image">
        <div class="image-floater">
            <div class="image-box">
            <img src="images/ETO/Thin Film Interference.png" class="pop-image" 
            style="max-width: 100%; width: 100vw"/>
            </div>
            <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
            Figure 2: Thin Film Interference</div><div class="image-tooltip-desc">
            ...</div></span>
        </div>
    </div>
    <div class="text">
        <p> 
            We have a setup where we have two materials with refractive indexes \( n_1 \) and \( n_3 \), and there is a thin film (hey, that's in the name!) with a width \( d \) and a refractive index \( n_2 \) between them. The light comes from the \( n_1 \) material. Also, don't let the image fool you, the light is going straight down.
        </p>
        <p> 
            When it hits the interface, it reflects a bit and transmits a bit, as you'd expect of a wave by now. Then the transmitted wave hits the second boundary, and again, some reflects and some transmits. We don't really care about the transmitted stuff, all the interesting things happen with the <em>reflected wave</em>.
        </p>
    </div>
    
</div>

Why is the reflected wave so interesting? Because it can then come back up into the first boundary and transmit a little bit. That means the original reflected wave and this new transmitted wave are travelling in the same direction, meaning they *interfere* (hey, that's in the name too!).

Since it's only going down and then back up, the path difference is simply \\( 2d \\). That means we will have reflective co-efficients: 

<div class=eqn> \[ r = r_{12} + r_{23} e^{i(2dk_2)} \] </div>  (k.r) 

If we set \\( d = \frac{\lambda}4 = \frac{\pi}{2k} \\), then the second term becomes -1, and we end up with:

<div class=eqn> \[ r = r_{12} - r_{23} \] </div>

This is “Quarter-wave coating” 

\\( r = 0 \\) when they are the same.

### Dielectric Mirrors 

### Angle Dependance

Before I only made it appear like the light was at an angle, but it wasn't really. But now it actually is

<div class=eqn> \[ \text{Path Difference} = 2d k_2 \cos t \] </div>

### Fabry–Pérot interferometry