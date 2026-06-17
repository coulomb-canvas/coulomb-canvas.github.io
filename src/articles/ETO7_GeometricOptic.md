---
subid: geo-optics
title: Geometric optics
topics: eto
---

Up until now, we’ve treated light as a ray, which is fine when the wavelength is way smaller than the object it is interacting with. Foe example, visible light 

If not, we use Fermat’s principle, where we kinda think of it like a particle. This guy asked what path light takes between two points, and concluded it takes the path which takes the least time (the shortest optical path) 



The change in phase comes from integrating the wavenumber along the path, which makes sense since a plane wave has exponent k.r, which is basically the phase, making it a phase difference:

<div class=eqn> \[ ∆\phi_\text{A to B} = \int^B_A k \ dl  \] </div> 

By virtue of the very fury lamb formula

<div class=eqn> \[ ∆\phi_\text{A to B} = \int^B_A \frac{\omega}{v} \ dl  \] </div> 

And by the relation

<div class=eqn> \[ ∆\phi_\text{A to B} = \int^B_A \frac{\omega}{c}n  \ dl  \] </div> 

The *optical path* is the refractive index over the path. 

<div class=eqn> \[ \tau = \int^B_A n  \ dl  \] </div> 

The time taken is the optical path over c 

<div class=eqn> \[ \text{Time taken} = \int^B_A \frac1{v} \ dl = \frac{\tau}{c}  \] </div> 

If we take the sum of all paths from a to b, most of them will destructively interfere, *except at the shortest length* (well, technically it's at the extremum which could be the minimum length *or* the maximum length, but how the bloody 'ell do you plan on maximising a path length, ykwim?)

So, we have a light source, A, and then some form of imager, which does whatever, and then it converges at the point B. 

> Ideal image: All rays should converge at B 

All paths should have the same optical pathlength to satisfy Fermat’s Theorem 

<div class=eqn> \[ ∆(\text{Optical Path}) = ∆\left( \int^B_A n \ dl \right) = 0 \] </div> 

### Imaging by a spherical interface

<div class="container">
    <div class="text">
    <p> 
        Now we want to bend the light to our will. To do this we will look at the most basic example. We have a sphere, and light is entering into it.
    </p>
    </div>
    <div class="image">
    <div class="image-floater">
        <div class="image-box">
        <img src="images/ETO/Spherical Interface.png" class="pop-image" 
        style="max-width: 100%; width: 30vw"/>
        </div>
        <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
        Figure 2: Telescope</div><div class="image-tooltip-desc">
        You saw this something like this when you clicked onto this topic</div></span>
    </div>
    </div>
</div>

We know the formula for optical path, which incorporated a whole integral and what not. But you don't actually have to integrate, since it's basically just refractive index times distance. We know the refractive indexes are \\( n_1 \\) and \\( n_2 \\), and then by pythagoras:

<div class=eqn> \[ \begin{align} \tau 
    &= n_1\sqrt{(u+x)^2+y^2} + n_2\sqrt{(v-x)^2+y^2} \\[6pt]
    &= n_1\sqrt{u^2+2ux+x^2+y^2} + n_2\sqrt{v^2-2vx+x^2+y^2}.
\end{align} \] </div> 

Then there is a theorem which says when any two chords on a circle cross, then the products of the lengths of the two pieces
of each chord are equal, meaning \\( x^2 + y^2 = 2Rx \\).

<div class=eqn> \[
\tau(x)=n_1\sqrt{u^2+2(R+u)x}+n_2\sqrt{v^2+2(R-v)x}
\] </div> 

Then to extremise, differentiate and put equal to zero

<div class=eqn> \[ \frac{d\tau(x)}{dx} = \frac{n_1(R+u)}{\sqrt{u^2+2(R+u)x}} + \frac{n_2(R-v)}{\sqrt{v^2+2(R-v)x}} = 0 \] </div> 

Then is \\( x \\) is small (the *paraxial rays* approximation):

<div class=eqn> \[ \frac{n_1(R+u)}{u} + \frac{n_2(R-v)}{v} = 0 \] </div> 

Rearranging:

<div class=eqn> \[ \frac{n_1}{u} + \frac{n_2}{v} = \frac{n_1 - n_2}{R} \] </div> 

### Thin lenses

Now if you think about it, a lens is a bit like if you were to take one spherical surfave and superglue another one on top of it

Principle rays:

1. Start parallel to optic axis 
2. End parallel to optic axis 
3. Straight all the way through 

Limits to resolution:

- Quality of the lens 
- Diffraction 
- Ability to resolve small angles 

To overcome these limits, we need to make the distance the light travels smaller, until we reach the limit of the ‘*near point*’, \\( d_\text{NP} \\). If it does form below \\( d_\text{NP} \\), then the image will form behind the retina, making it appear blurry

<div class="container">
    <div class="text">
    <p> 
        wag123
    </p>
    </div>
    <div class="image">
    <div class="image-floater">
        <div class="image-box">
        <img src="images/ETO/Magnifying Glass.png" class="pop-image" 
        style="max-width: 100%; width: 100vw"/>
        </div>
        <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
        Figure 1: Magnifying Glass</div><div class="image-tooltip-desc">
        You saw this something like this when you clicked onto this topic</div></span>
    </div>
    </div>
</div>



<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac1{u} + \frac1{v} = \frac1{f} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Thin Lens Equation
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac1{f} = (n-1) \left( \frac1{R_1} - \frac1{R_2} \right) \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Thin Lens Equation
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

### Telescopes 

<div class="container">
    <div class="text">
    <p> 
        Light comes in from a very, very large distance, as near enough parallel rays. IT passes through the objective lens and is focused onto the focal plane at a difference f1from the objective lens. </p>
    <p>
        Then there is a second lens (the eyepiece) at a distance f2 from the focal plane. The light rays escape parallel fro the eyepiece 
    </p>
    </div>
    <div class="image">
    <div class="image-floater">
        <div class="image-box">
        <img src="images/ETO/Telescope.png" class="pop-image" 
        style="max-width: 100%; width: 150vw"/>
        </div>
        <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
        Figure 2: Telescope</div><div class="image-tooltip-desc">
        You saw this something like this when you clicked onto this topic</div></span>
    </div>
    </div>
</div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ M = \frac{f_1}{f_2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 3: Magnification
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

<div class="container">
    <div class="text">
    <p> 
        wag123
    </p>
    </div>
    <div class="image">
    <div class="image-floater">
        <div class="image-box">
        <img src="images/ETO/Telescope 2.png" class="pop-image" 
        style="max-width: 100%; width: 150vw"/>
        </div>
        <span class="image-tooltip" style="left:-40%;"> <div class="image-tooltip-title">
        Figure 3: Telescope</div><div class="image-tooltip-desc">
        You saw this something like this when you clicked onto this topic</div></span>
    </div>
    </div>
</div>