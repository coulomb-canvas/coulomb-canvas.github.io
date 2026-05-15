---
subid: solar-intro
title: Introduction to the Solar System
topics: solar
---


I'm sure you're familiar with the ultimate astronomer ragebate tactic: telling us that Pluto *isn't* a planet.

So what exactly makes a planet, a planet? As opposed to a not-a-planet, like Pluto?

An is-a-planet planet is any celestial body which has these 3 features:
1. It's in orbit around a star
2. It has enough mass that it's own gravity can keep it in shape, no matter what other forces act on it
3. It has cleared the neighbourhood around its orbit

So not-a-planets (or *dwarf planets* if we wanna be official) only follow the first two.

I won't lie, that last condition feels a bit like that one moment in Yu-Gi-Oh Vrains, where Soulburner conveniently pulls the ring of fire trap card out on Blue Maiden, knowing good and well that that trap card is completely useless in 99.5% of actual duels.

However, this last point was included to differentiate Pluto from other random bodies they find. But this definition still ain't stellar, because like... what do you mean 'clears' it?

### Hydrostatic Equilibrium

Another thing which was kinda brushed over was the hydrostatic equilibrium part of the definition

Let's say we have a planet with mass \\( M \\). Within that planet, there's an incy wincy cylinder, with mass \\( dm \\). Just by using Newtonian Gravity, we know that

<div class=eqn> \[ F_G = \frac{GM_r \ dm}{r^2} \] </div>

We also know the pressure

<div class=eqn> \[ \begin{align} F_P 
    &= P(r) \ dA − P(r + dr) \ dA \\[6pt]
    &= −dP \ dA \\[6pt]
    \end{align} \] </div>

Since the \\( dm = \rho(r) dr \ dA \\), by putting that in we get

<div class="hover-wrapper">
    <div class="formula-container">
        <div class="formula-box" style="text-align: center; color: var(--text); margin: auto;">
            \[ \frac{dP}{dr} = - \frac{GM_r \rho}{r^2} \]
        </div>
        <span class="formula-tooltip"><div class="formula-tooltip-title">
        Formula X
        </div><div class="formula-tooltip-desc">
        ...
        </div></span>
    </div>
</div>


