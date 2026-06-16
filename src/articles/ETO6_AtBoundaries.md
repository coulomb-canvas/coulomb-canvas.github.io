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

In either medium, there are plane wave solutions which need to be equal on the boundary. That means that the frequencies don't change:

<div class=eqn> \[ \omega_i = \omega_r = \omega_t \] </div> 

So that means we can ignore the "\\( -i\omega t \\)", since it's just a constant factor

<div class=eqn> \[ (k_r−k_i)·∆r= (k_t−k_i)·∆r= 0 , \] </div> 

This means all the \\(\vec{k}\\)s are the same

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

