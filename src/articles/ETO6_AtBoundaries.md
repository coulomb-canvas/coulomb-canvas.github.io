---
subid: wave-at-boundaries
title: EM waves in matter with boundaries
topics: eto
---

I'm sure you know this about waves: in the case of a reflection, the angle of incidence, \\( i \\), is the same as the angle of reflection \\( r \\)

<div class=eqn> \[ i = r \] </div> 

In addition, the transmitted angle is given by Snell's law

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ n_1 \sin{i} = n_2 \sin{t} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

Now we will actually derive them.

So, we’ll use the standard boring model for waves that we have always used forever. There are two materials, with a flat boundary between the two of them. The top layer has a refractive index of \\( n_1 \\) and the bottom layer has a refractive index of \\( n_2 \\)  

There is now a plane wave, entering the material, with electric field: 

In either medium, there are plane wave solutions which need to be equal on the boundary. The phases need to match. The angular frequencies would need to be the same, because if they weren’t then at some later time, they would break apart . That means that the frequencies don't change:

<div class=eqn> \[ \omega_i = \omega_r = \omega_t \] </div> 

So that means we can ignore the "\\( -i\omega t \\)", since it's just a constant factor

The time can take up pretty much any value, but x is limited to the plane. That means the parallel components of the wavenumber cannot change, meaning that any changes in the wavenumber must be in the perpendicular component 

<div class=eqn> \[ (k_r−k_i)·∆r= (k_t−k_i)·∆r= 0 , \] </div> 

This means all the \\(\vec{k}\\)s are the same

Since we know that the frequency doesn’t change and the speed of light is a constant, then we know that k is proportional to n. That means that \\( k_i = k_r \\), since they are both in the same section with the same refractive index 

### Fresnel Relations

We know that the normal component of the displacement and the magnetic field are the same across the boundaries, whereas the tangential components 

All light can be resolved into a vertical and a horizontal component, so we need to consider when the electric field is parallel to the plane (going into the page) and the electric field is oscillating perpendicular. 

An easier way to think about, when the electric field comes out of the page (this is called s-polarisation) vs when the magnetic field comes out of the page (this is called p-polarisation). Then you can just use the right-hand gang symbol with thumb being electric field and pointy finger being magnetic field. 

#### S polarisation 

Let’s begin with our electric field going out of the page. There are 3 B-vectors, each of which can be split into a parallel and perpendicular component 

So just to be clear, the first subscript tells us if it’s reflected or transmitted, and the second one tells us if it’s parallel or perpendicular. 

Via the correspondence principle, we can see that the angle BTI makes with BI. Then by using basic trigonometry, we get: 

<div class=eqn> \[ B_\text{TI} = B_I \cos{\theta_i}, \quad B_\text{NI} = B_I \cos{\theta_i} \] </div> 

And there are similar relations for the other components 

Even though technically it is the tangential component of H which is transfered across the boundary, since mu is usually 1, B often ends ub being the same too anyway. 

So, the electric fields end up simply adding together 

And the tangentials of the magnetic field add up: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ r_S = \frac{E_r}{E_i} = \frac{n_1 \cos{i} − n_2 \cos{t}}{n_1 \cos{i} + n_2 \cos{t}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

Instead of submitting for the reflected term, do the transmitted term: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ t_S = \frac{E_r}{E_i} = \frac{2 n_1 \cos{i}}{n_1 \cos{i} + n_2 \cos{t}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

#### P polarisation 

Now we have the magnetic field going out the page.  

As before, each E can be split into a parallel and perpendicular component 

Via the correspondence principle, we can see that the angle the wave makes with ETI. Then by using basic trigonometry, we get:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ r_P = \frac{E_r}{E_i} = \frac{n_1 \cos{t} − n_2 \cos{i}}{n_1 \cos{t} + n_2 \cos{i}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

Instead of submitting for the reflected term, do the transmitted term: 

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ t_S = \frac{E_r}{E_i} = \frac{2 n_1 \cos{i}}{n_1 \cos{t} + n_2 \cos{i}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Surface charge density
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

### The Brewster Angle

Snell’s law, if there is a boundary with \\( n_2 > n_1\\), then \\(t < i \\). Then, at *normal incidence* (\\(t = i = 0\\)) \\( r_s \\) is equal to \\( r_p \\), which is less than zero  

Now try \\(t = i = 90\\) (*oblique incidence*), \\( r_s \\) becomes –1 and \\( r_p \\) becomes 1. This is total reflection, since nothing is transmitted. The minus sign describes a phase shift 

This means, at least for the p-polarised light, there is a point at which \\( r_p \\) switches from positive to negative, where \\( r_p \\) = 0. This is called *Brewster’s angle*, \\( i_B \\) 

(R = r^2 and T = 1-R) 

> **BREWSTER ANGLE, \\( i_B \\)** The value of \\( i \\) at which \\(r_P\\) is zero 

And we can derive this angle quite simply by finding the angle at which Snell's law and the Frensel relation for p-polarised light are both true at the same time. As usual, <span class="popup-trigger" data-popup-id="v-u"> can't be arsed to derive it</span>, but by taking those two equations, squaring them, and pissing about with 'em until you get an angle of incidence, you get this angle:

<div class="popup" id="v-u">
        <div class="popup-content">
          <button class="popup-close">&times;</button>
          <h4 style="font-family: 'Njal', sans-serif; font-size: 30px; text-decoration: underline; 
          margin-bottom: 0px; margin-top: 0px;">Brewster Angle ✪✪✪</h4>
          <p>
            Take the Fresnel equation and Snell's law, and square 'em: </p>
            \[
                n_1^2 \cos^2{t_B} = n_2^2 \cos^2{i_B} \\ 
                n_1^2 \sin^2{i_B} = n_2^2 \sin^2{t_B}
            \]
            <p>Multiply the top equation by \( n_2^2 \) and the bottom one by \( n_1^2 \)  </p>
            \[
                n_2^2 n_1^2 \cos^2{t_B} = n_2^4 \cos^2{i_B} \\ 
                n_1^4 \sin^2{i_B} = n_1^2 n_2^2 \sin^2{t_B}
            \]
            <p>Add ‘em together, then using the fact that \( \sin^2{\theta} + \cos^2{\theta} = 1 \): </p>
            \[
                n_2^2 n_1^2 \style{opacity: 30%}{\cancel{(\cos^2{t_B} + \sin^2{t_B})}} = n_2^4 \cos^2{i_B} + n_1^4 \sin^2{i_B}
            \]
            <p>Divide ‘em by cos^2, and then use the identity for <span class="definition" data-definition="\[ \frac1{\cos{\theta}} = 1+\tan^2{\theta} \]">secants</span></p>
            \[
                n_2^2 n_1^2 (1+\tan^2{i_B}) = n_2^4 + n_1^4 \tan^2{i_B}
            \]
            <p>Take the tan terms onto one side, then take out a factor of \( n_1^2 \) on the left and \( n_2^2 \) on the right and then cancel</p>
            \[
                n_2^2 n_1^2 \tan^2{i_B} - n_1^4 \tan^2{i_B} = n_2^4 - n_2^2 n_1^2 \\
                n_1^2 \tan^2{i_B} \style{opacity: 30%}{\cancel{(n_2^2 - n_1^2)}} = n_2^2\style{opacity: 30%}{\cancel{(n_2^2 - n_1^2)}} \\
                n_1^2 \tan^2{i_B} = n_2^2
            \]
            <p>Then by simple algebra: </p>
            <div class="hover-wrapper">
                <div class="formula-container">
                    <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
                        \[ i_B = \tan^{-1}\left( \frac{n_2}{n_1} \right) \]
                    </div>
                    <span class="formula-tooltip"><div class="formula-tooltip-title">
                        Formula 1: Brewster Angle
                    </div><div class="formula-tooltip-desc">
                        The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
                    </div></span>
                </div>
            </div>
          </p>
        </div>
      </div>

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ i_B = \tan^-1{\frac{n_2}{n_1}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Brewster Angle
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>


### Total Internal Reflection 

If we have a boundary where \\( n_1 \\) is more than \\( n_2\\), then there is no solution for \\( t \\). That means the light is all reflected. This is called *total internal reflection*

So remember like half a second ago, when I told you there wasn't a solution for \\( t \\)? Actually there is a solution for t, it’s just an exponential decay rather than a normal wave. 

The transmitted wavefunction has a x component and a z component:

<div class=eqn> \[ k = k_x \hat{x} + k_z \hat{x} \] </div> 

\\( k_\parallel \\) must be equal on both sides of the boundary, meaning 

<div class=eqn> \[ k_{\text{transmit}, x} = k_{\text{incident}, x} + k_\text{incident} \sin{i}  \] </div> 

Magnitude squared: 

<div class=eqn> \[ |k_\text{incident}|^2 = |k_{\text{transmit}, x}|^2 + |k_{\text{transmit}, z}|^2 \] </div> 

<div class=eqn> \[ k = \frac{\omega n}{c}   \] </div> 

Just by squaring:

<div class=eqn> \[ k^2 = \frac{\omega^2}{c^2}(n_1sin)  \] </div> 

We end up with 

<div class=eqn> \[ E_t \propto e^{-kz} e^{i(k_{\text{transmit}, x} x- \omega t)}   \] </div> 

This is called an *evanescent wave *


### Conductors 

Currents are allowed, but no free charges. 

<div class=eqn> \[ 
    \vec{D} = \varepsilon\vec{E} \\ 
    \vec{B} = \mu\vec{H} 
\] </div> 

We also introduce the *conductivity*: 

<div class=eqn> \[ \vec{J} = g\vec{E}  \] </div> 

This is literally just saying that a more conductive field gives you a larger current fort the same field. Anyway we take the curl of M3, this is like the billionth time we've done this icl, you get the gist:

<div class=eqn> \[ k^2 = i \mu g \omega + \mu \varepsilon \omega^2  \] </div> 

For a ‘good conductor’, where omega is way less than g, we can neglect the second term 

<div class=eqn> \[ k^2 \approx i \mu g \omega \] </div> 

That gives us a value for k:

<div class=eqn> \[ k \approx ± \frac{1+i}{\sqrt2} \sqrt{\mu g \omega} \] </div> 

Which we can rewrite as

<div class=eqn> \[ k \approx ± \frac{1+i}{\delta} \] </div> 

From that you can see:

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box eqn" style="text-align: center; color: var(--text); margin: auto;">
            \[ \delta = \sqrt{\frac2{\mu g \omega}} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
            Formula 1: Skin Depth
        </div><div class="formula-tooltip-desc">
            The surface charge density is positive on the side where the electric field lines point to it, and negative on the other side.
        </div></span>
    </div>
</div>

The decaying and plane wave component are in the same direction 

k, E and H are now out of phase 

### Reflections on boundaries with conductors 

Conductivity is infinite in a perfect conductor 

 

